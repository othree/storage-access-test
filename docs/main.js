
const f = async () => {
  if (!document.requestStorageAccess) {
    alert('Storage Access API not available!');
    return;
  }

  let requestResult = '';

  const hasResult = await document.hasStorageAccess();

  try {
    requestResult = await document.requestStorageAccess();
  } catch (error) {
    requestResult = `[rejected] ${error ? error.toString() : ''}`;
  }

  const hasResult2 = await document.hasStorageAccess();


  document.getElementById('has-result-1').innerText = hasResult;
  document.getElementById('request-result').innerText = requestResult;
  document.getElementById('has-result-2').innerText = hasResult2;

  const getStorageResult = localStorage.getItem(STORAGE_KEY);

  let setStorageResult = '';

  try {
    setStorageResult = localStorage.setItem(STORAGE_KEY, STORAGE_KEY);
  } catch (error) {
    setStorageResult = `[exception] ${error ? error.toString() : ''}`;
  };

  document.getElementById('get-storage-result').innerText = getStorageResult;
  document.getElementById('set-storage-result').innerText = setStorageResult;

  const cookieResult = Cookies.get(COOKIE_KEY);

  document.getElementById('get-cookie-result').innerText = cookieResult;

  Cookies.set(COOKIE_KEY, COOKIE_KEY, { expires: 7 });
};

f();

const clean = document.getElementById('clean');

if (clean) {
  clean.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEY);
    Cookies.remove(COOKIE_KEY);
  }, false);
}

