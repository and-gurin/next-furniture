'use client';

import I18nProvider from '@/components/I18nProvider/I18nProvider';
import Button from '@/components/button/button';

export default function ButtonTranslate() {

    return (
        <I18nProvider>
            <Button/>
        </I18nProvider>
    );
}