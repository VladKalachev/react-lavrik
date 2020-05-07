import {inject, observer} from 'mobx-react';

export default function(Component) {
    return inject('stores')(observer(Component))
};