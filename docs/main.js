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
  Cookies.set(COOKIE_KEY, COOKIE_KEY, {
    expires: 365,
    path: "/",
    domain: document.location.host,
    secure: true
  });

  let setStorageResult = "";

  try {
    setStorageResult = localStorage.setItem(STORAGE_KEY, STORAGE_KEY);
  } catch (error) {
    setStorageResult = `[exception] ${error ? error.toString() : ""}`;
  }

  document.getElementById("set-storage-result").innerText = setStorageResult;
};

const g = async () => {
  if (!document.requestStorageAccess) {
    alert("Storage Access API not available!");
    return;
  }

  let requestResult = "";

  try {
    requestResult = await document.requestStorageAccess();
    alert("Grant access!");
  } catch (error) {
    requestResult = `[rejected] ${error ? error.toString() : ""}`;
    alert("Failed grant access!");
  }

  document.getElementById("request-result").innerText = requestResult;
};

const r = async () => {
  if (!document.requestStorageAccess) {
    alert("Storage Access API not available!");
    return;
  }

  const hasResult2 = await document.hasStorageAccess();

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

const grant = document.getElementById("grant");
const read = document.getElementById("read");
const save = document.getElementById("save");
const clean = document.getElementById("clean");

if (grant) {
  grant.addEventListener("click", g, false);
}

if (read) {
  read.addEventListener("click", r, false);
}

if (save) {
  save.addEventListener("click", s, false);
}

if (clean) {
  clean.addEventListener(
    "click",
    () => {
      localStorage.removeItem(STORAGE_KEY);
      Cookies.remove(COOKIE_KEY, {
        domain: document.location.host,
        path: "/"
      });
    },
    false
  );
}
