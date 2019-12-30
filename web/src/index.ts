import { getElementById } from './ui';
import { TabControl, ITabInfo } from './TabControl';
import { IComponent } from './components/IComponent';

import { PrivatePartComponent } from './components/privatePartComponent';
import { PasswordComponent } from './components/passwordComponent';
import { CipherComponent } from './components/cipherComponent';
import { ReEncryptComponent } from './components/reEncryptComponent';

import * as storageOutputComponent from './components/storageOutputComponent';

const nothingTabInfo: ITabInfo = {
    getTabButton(): HTMLInputElement {
        return getElementById('btnTabNothing');
    },
    getTabContent(): HTMLInputElement {
        return getElementById('divTabNothing');
    },
    onTabSelected(): void {
        storageOutputComponent.hide();
    }
}

const elements: any[] = [
    nothingTabInfo,
    new PrivatePartComponent(),
    new PasswordComponent(),
    new CipherComponent(),
    new ReEncryptComponent(),
    new storageOutputComponent.StorageOutputComponent(),
];

const tabs: ITabInfo[] = elements.filter(e => (e as ITabInfo).getTabButton !== undefined);
const components: IComponent[] = elements.filter(e => (e as IComponent).init !== undefined);

new TabControl(tabs);

declare const COMMITHASH: string;

const version = COMMITHASH.substr(0, 11);
const githubLink = '<a href="https://github.com/TanukiSharp/ItchyPassword" target="_blank">github</a>';

getElementById('divInfo').innerHTML = `${version}<br/>${githubLink}`;

let component: IComponent;
for (component of components) {
    component.init();
}
