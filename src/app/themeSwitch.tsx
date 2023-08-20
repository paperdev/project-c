'use client';

const THEMES = ['light', 'dark', 'aqua', 'halloween', 'luxury', 'valentine', 'dracula', 'retro'];

export default function ThemeSwitch() {
  const onChangeEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const html = document.getElementsByTagName('html')[0];
    html.setAttribute('data-theme', event.target.value);
  }

  return (
    <select className='paper-select paper-select-ghost focus:outline-none' defaultValue='default' onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {onChangeEvent(event)}}>
      <option value='default' disabled>default</option>
      {THEMES.map((theme, index) => {
        return(
          <option key={index} value={theme}>{theme}</option>
        );
      })}
    </select>
  )
}
