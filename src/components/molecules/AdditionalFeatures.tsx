import ButtonDarkMode from '../atoms/ToggleDarkMode';
import ButtonLanguages from '../atoms/ButtonLanguages';
import ToggleDarkMode from '../atoms/ToggleDarkMode';

export default function AdditionalFeatures() {
  return (
    <div className='absolute bottom-8 flex gap-4 lg:relative lg:bottom-auto'>
      <ButtonLanguages />
      <ToggleDarkMode />
    </div>
  );
}
