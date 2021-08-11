import { report } from '../util.mjs';

async function fetchData() {
  const url = 'https://gist.githubusercontent.com/ear1grey/070571c34b914ee468e421aa28cbed26/raw/7aefbd8de4c746d5692890441f3e6ecf90168514/data.json';
  const response = await fetch(url);

  try {
    if (response.ok) {
      const data = await response.json();
      report(
        data,
        false,
        '#numberlist',
      );
    } else {
      throw new Error('connection failed');
    }
  } catch (error) {
    report(
      `${response.status} ${response.statusText} when loading ${url}`,
      true,
      '#numberlist',
    );
  }
}

function pageLoaded() {
  const fetchit = document.querySelector('#fetchit');
  fetchit.addEventListener('click', fetchData);
}

window.addEventListener('load', pageLoaded);
