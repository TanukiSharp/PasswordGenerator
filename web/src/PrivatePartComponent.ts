import { getElementById, SUCCESS_COLOR, ERROR_COLOR } from './ui';

import TimedAction from './TimedAction';

const btnProtectTitleForProtect = 'Stores the string in memory and removes it from the UI component. Prevents a physical intruder from copy/pasting the value.';
const btnProtectTitleForClear = 'Removes the string form memory and re-enables the UI component.';

const txtPrivatePart: HTMLInputElement = getElementById('txtPrivatePart');
const txtPrivatePartConfirmation: HTMLInputElement = getElementById('txtPrivatePartConfirmation');
const btnProtect: HTMLInputElement = getElementById('btnProtect');
const spnProtectedConfirmation: HTMLInputElement = getElementById('spnProtectedConfirmation');

const spnPrivatePartSize: HTMLInputElement = getElementById('spnPrivatePartSize');
const spnPrivatePartSizeConfirmation: HTMLInputElement = getElementById('spnPrivatePartSizeConfirmation');

const PRIVATE_PART_PROTECTION_TIMEOUT: number = 60 * 1000;

let privatePart: string | undefined;

let onChangedHandlers: (() => void)[] = [];

export function registerOnChanged(onChanged: () => void) {
    onChangedHandlers.push(onChanged);
}

export function getPrivatePart(): string {
    if (privatePart !== undefined) {
        return privatePart;
    }
    return txtPrivatePart.value;
}

function protectAndLockPrivatePart(): void {
    if (txtPrivatePart.value.length === 0) {
        return;
    }

    privatePart = txtPrivatePart.value;
    spnProtectedConfirmation.innerHTML = 'Protected';

    txtPrivatePart.value = '';
    txtPrivatePartConfirmation.value = '';
    spnPrivatePartSize.innerHTML = '0';
    spnPrivatePartSizeConfirmation.innerHTML = '0';

    txtPrivatePart.disabled = true;
    txtPrivatePartConfirmation.disabled = true;

    btnProtect.innerHTML = 'Clear and unlock';
    btnProtect.title = btnProtectTitleForClear;

    updatePrivatePartsMatching();
}

function clearAndUnLockPrivatePart(): void {
    privatePart = undefined;
    spnProtectedConfirmation.innerHTML = '';

    txtPrivatePart.disabled = false;
    txtPrivatePartConfirmation.disabled = false;

    btnProtect.innerHTML = 'Protect and lock';
    btnProtect.title = btnProtectTitleForProtect;
    btnProtect.disabled = true;
}

function togglePrivatePartProtection(): void {
    if (privatePart === undefined) {
        protectAndLockPrivatePart();
    } else {
        clearAndUnLockPrivatePart();
    }
}

btnProtect.addEventListener('click', () => {
    togglePrivatePartProtection();
});

const protectPrivatePartAction: TimedAction = new TimedAction(protectAndLockPrivatePart, PRIVATE_PART_PROTECTION_TIMEOUT);

txtPrivatePart.addEventListener('input', () => {
    btnProtect.disabled = txtPrivatePart.value.length === 0;

    spnPrivatePartSize.innerHTML = txtPrivatePart.value.length.toString();
    updatePrivatePartsMatching();

    let onChangedHandler: () => void;
    for (onChangedHandler of onChangedHandlers) {
        onChangedHandler();
    }

    protectPrivatePartAction.reset();
});

function updatePrivatePartsMatching(): void {
    if (txtPrivatePartConfirmation.value === txtPrivatePart.value) {
        txtPrivatePartConfirmation.style.setProperty('background', SUCCESS_COLOR);
    } else {
        txtPrivatePartConfirmation.style.setProperty('background', ERROR_COLOR);
    }
};

txtPrivatePartConfirmation.addEventListener('input', () => {
    spnPrivatePartSizeConfirmation.innerHTML = txtPrivatePartConfirmation.value.length.toString();
    updatePrivatePartsMatching();
});

updatePrivatePartsMatching();
btnProtect.title = btnProtectTitleForProtect;