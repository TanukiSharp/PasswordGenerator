import * as crypto from '../crypto';
import * as stringUtils from '../stringUtils';
import * as arrayUtils from '../arrayUtils';

import { getElementById, setupCopyButton, ERROR_COLOR } from '../ui';
import { getPrivatePart } from './privatePartComponent';

import { CipherV2 } from '../ciphers/v2';

const cipher: crypto.ICipher = new CipherV2();

const txtCipherSource: HTMLInputElement = getElementById('txtCipherSource');
const txtCipherTarget: HTMLInputElement = getElementById('txtCipherTarget');
const btnEncrypt: HTMLInputElement = getElementById('btnEncrypt');
const btnDecrypt: HTMLInputElement = getElementById('btnDecrypt');

const btnClearCipherSource: HTMLInputElement = getElementById('btnClearCipherSource');
const spnCopyCipherTargetFeedback: HTMLInputElement = getElementById('spnCopyCipherTargetFeedback');
const btnCopyCipherTarget: HTMLInputElement = getElementById('btnCopyCipherTarget');
const btnClearCipherTarget: HTMLInputElement = getElementById('btnClearCipherTarget');

setupCopyButton(txtCipherTarget, btnCopyCipherTarget, spnCopyCipherTargetFeedback);

function clearSourceVisualCue(): void {
    txtCipherSource.style.removeProperty('background-color');
}

function clearTargetVisualCue(): void {
    txtCipherTarget.style.removeProperty('background-color');
}

function setSourceVisualCueError() {
    txtCipherSource.style.setProperty('background-color', ERROR_COLOR);
}

function setTargetVisualCueError() {
    txtCipherTarget.style.setProperty('background-color', ERROR_COLOR);
}

function clearAllVisualCues(): void {
    clearSourceVisualCue();
    clearTargetVisualCue();
}

btnEncrypt.addEventListener('click', async () => {
    txtCipherSource.focus();
    txtCipherTarget.value = '';
    clearAllVisualCues();

    if (txtCipherSource.value.length === 0) {
        setSourceVisualCueError();
        return;
    }

    const privatePart: string = getPrivatePart();
    if (privatePart.length === 0) {
        console.warn('Private part is empty');
        return;
    }

    const input: ArrayBuffer = stringUtils.stringToArray(txtCipherSource.value);
    const password: ArrayBuffer = stringUtils.stringToArray(privatePart);

    const encrypted: ArrayBuffer = await cipher.encrypt(input, password);

    txtCipherTarget.value = arrayUtils.toCustomBase(encrypted, crypto.BASE62_ALPHABET);
});

btnDecrypt.addEventListener('click', async () => {
    txtCipherSource.focus();
    txtCipherTarget.value = '';
    clearAllVisualCues();

    if (txtCipherSource.value.length === 0) {
        setSourceVisualCueError();
        return;
    }

    const privatePart: string = getPrivatePart();
    if (privatePart.length === 0) {
        console.warn('Private part is empty');
        return;
    }

    try {
        const input: ArrayBuffer = arrayUtils.fromCustomBase(txtCipherSource.value, crypto.BASE62_ALPHABET);
        const password: ArrayBuffer = stringUtils.stringToArray(privatePart);

        const decrypted: ArrayBuffer = await cipher.decrypt(input, password);

        txtCipherTarget.value = arrayUtils.arrayToString(decrypted);
    } catch (error) {
        console.warn(`Failed to decrypt${error.message ? `, error: ${error.message}` : ', no error message'}`);
        setTargetVisualCueError();
    }
});

txtCipherSource.addEventListener('input', () => {
    if (txtCipherSource.value.length > 0) {
        clearSourceVisualCue();
    }
});

btnClearCipherSource.addEventListener('click', () => {
    txtCipherSource.value = '';
});

btnClearCipherTarget.addEventListener('click', () => {
    txtCipherTarget.value = '';
});
