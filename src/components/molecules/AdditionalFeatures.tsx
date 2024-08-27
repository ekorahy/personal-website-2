import ButtonDarkMode from '../atoms/ButtonDarkMode';
import ButtonLanguages from '../atoms/ButtonLanguages';

export default function AdditionalFeatures() {
  return (
    <div className='absolute bottom-8 flex gap-4 lg:relative lg:bottom-auto'>
      <ButtonLanguages />
      <ButtonDarkMode />
    </div>
  );
}
