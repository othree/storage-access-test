const l = async () => {
  if (!document.hasStorageAccess) {
    alert("Storage Access API not available!");
    return;
  }

  const hasResult = await document.hasStorageAccess();

  document.getElementById("has-result-1").innerText = hasResult;
};

l();

const s = async () => {
  Cookies.set(COOKIE_KEY, COOKIE_KEY, { expires: 7 });

  let setStorageResult = "";

  try {
    setStorageResult = localStorage.setItem(STORAGE_KEY, STORAGE_KEY);
  } catch (error) {
    setStorageResult = `[exception] ${error ? error.toString() : ""}`;
  }

  document.getElementById("set-storage-result").innerText = setStorageResult;
};

const f = async () => {
  if (!document.requestStorageAccess) {
    alert("Storage Access API not available!");
    return;
  }

  let requestResult = "";

  try {
    requestResult = await document.requestStorageAccess();
  } catch (error) {
    requestResult = `[rejected] ${error ? error.toString() : ""}`;
  }

  const hasResult2 = await document.hasStorageAccess();

  document.getElementById("request-result").innerText = requestResult;
  document.getElementById("has-result-2").innerText = hasResult2;

  let getStorageResult = "";

  try {
    getStorageResult = localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    getStorageResult = `[exception] ${error ? error.toString() : ""}`;
  }

  document.getElementById("get-storage-result").innerText = getStorageResult;

  const cookieResult = Cookies.get(COOKIE_KEY);

  document.getElementById("get-cookie-result").innerText = cookieResult;
};

const run = document.getElementById("run");
const save = document.getElementById("save");
const clean = document.getElementById("clean");

if (run) {
  run.addEventListener("click", f, false);
}

if (save) {
  save.addEventListener("click", s, false);
}

if (clean) {
  clean.addEventListener(
    "click",
    () => {
      localStorage.removeItem(STORAGE_KEY);
      Cookies.remove(COOKIE_KEY);
    },
    false
  );
}
