import I18nProvider from '@/components/I18nProvider/I18nProvider';
import Hero from '@/components/hero/Hero';

export default function HeroTranslate() {

    return (
        <I18nProvider>
            <Hero/>
        </I18nProvider>
    );
}