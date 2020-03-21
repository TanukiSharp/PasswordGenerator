import { ICipher, getDerivedBytes } from '../crypto';
import { CancellationToken, ensureNotCancelled } from '../asyncUtils';

export class CipherV2 implements ICipher {
    public get version(): number {
        return 2;
    }

    public get description(): string {
        return 'PBKDF2 + AES-GCM';
    }

    async encrypt(input: ArrayBuffer, password: ArrayBuffer, cancellationToken: CancellationToken): Promise<ArrayBuffer> {
        const output: ArrayBuffer = new ArrayBuffer(12 + 16 + 16 + input.byteLength);

        const nonce: Uint8Array = crypto.getRandomValues(new Uint8Array(output, 0, 12));
        const passwordSalt: Uint8Array = crypto.getRandomValues(new Uint8Array(output, 12, 16));

        const aesGcmParams: AesGcmParams = {
            name: 'AES-GCM',
            iv: nonce
        };

        const aesKeyAlgorithm: AesKeyAlgorithm = {
            name: 'AES-GCM',
            length: 256
        };

        const passwordKey: CryptoKey = await window.crypto.subtle.importKey(
            'raw',
            await getDerivedBytes(password, passwordSalt, cancellationToken),
            aesKeyAlgorithm,
            false,
            ['encrypt']
        );

        ensureNotCancelled(cancellationToken);

        const result: ArrayBuffer = await window.crypto.subtle.encrypt(aesGcmParams, passwordKey, input);

        ensureNotCancelled(cancellationToken);

        new Uint8Array(output).set(new Uint8Array(result), 12 + 16);

        return output;
    }

    async decrypt(input: ArrayBuffer, password: ArrayBuffer, cancellationToken: CancellationToken): Promise<ArrayBuffer> {
        const nonce: Uint8Array = new Uint8Array(input, 0, 12);
        const passwordSalt: Uint8Array = new Uint8Array(input, 12, 16);
        const payload: Uint8Array = new Uint8Array(input, 12 + 16);

        const aesGcmParams: AesGcmParams = {
            name: 'AES-GCM',
            iv: nonce
        };

        const aesKeyAlgorithm: AesKeyAlgorithm = {
            name: 'AES-GCM',
            length: 256
        };

        const derivedKey: ArrayBuffer = await getDerivedBytes(password, passwordSalt, cancellationToken);

        ensureNotCancelled(cancellationToken);

        const passwordKey: CryptoKey = await window.crypto.subtle.importKey(
            'raw',
            derivedKey,
            aesKeyAlgorithm,
            false,
            ['decrypt']
        );

        ensureNotCancelled(cancellationToken);

        const result: ArrayBuffer = await window.crypto.subtle.decrypt(aesGcmParams, passwordKey, payload);

        ensureNotCancelled(cancellationToken);

        return result;
    }
}
