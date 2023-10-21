export const baseURL_PHP = "https://admin.arabians.pk/api";
// export const baseURL_PHP='http://localhost/horses/api';

export const globalFetcher = (link) => fetch(link).then((res) => res.json());

export const allmares = async () => {
  try {
    const res = await fetch(`${baseURL_PHP}/all-mares`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const allevents = async () => {
  try {
    const res = await fetch(`${baseURL_PHP}/all-events`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const viewevent = async (id) => {
  try {
    const res = await fetch(`${baseURL_PHP}/event/${id}/result`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const event_elig_horse = async (body) => {
  var requestOptions = {
    method: "POST",
    body: body,
    redirect: "follow",
  };
  try {
    const res = await fetch(
      `${baseURL_PHP}/check-horse-elig`,
      requestOptions
    );
    // console.log(res)
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const allstallions = async () => {
  try {
    const res = await fetch(`${baseURL_PHP}/all-stallions`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getbreeds = async () => {
  try {
    const res = await fetch(`${baseURL_PHP}/breeds`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const viewbreed = async (friendly_url) => {
  try {
    const res = await fetch(`${baseURL_PHP}/breed/${friendly_url}/horses`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getnews = async () => {
  try {
    const res = await fetch(`${baseURL_PHP}/news-updates`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const viewnews = async (link) => {
  try {
    const res = await fetch(`${baseURL_PHP}/news-updates/${link}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getstuds = async () => {
  try {
    const res = await fetch(`${baseURL_PHP}/studs`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const viewhorse = async (friendly_URL) => {
  try {
    const res = await fetch(`${baseURL_PHP}/view-horse/${friendly_URL}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// working on view pedigree modal by hamza 

export const viewPedigree = async (friendly_URL) => {
  try{
    const res = await fetch(`${baseURL_PHP}/view-pedigree/${friendly_URL}`)
    return res;
  } catch(err){
    console.log(err,"ERROR")
  }
}

export const getfarms = async () => {
  try {
    const res = await fetch(`${baseURL_PHP}/stud-farms`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const viewfarm = async (friendly_URL) => {
  try {
    const res = await fetch(`${baseURL_PHP}/view-stud-farm/${friendly_URL}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getmembers = async () => {
  try {
    const res = await fetch(`${baseURL_PHP}/members`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const viewmember = async (friendly_url) => {
  try {
    const res = await fetch(`${baseURL_PHP}/member/${friendly_url}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const mystudcertificates = async (friendly_url) => {
  try {
    const res = await fetch(
      `${baseURL_PHP}/my-stud-certificates/${friendly_url}`
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const horsesEntered = async (id) => {
  try {
    const res = await fetch(
      `${baseURL_PHP}/horses/${id}/entered`
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const ownerships = async (id) => {
  try {
    const res = await fetch(
      `${baseURL_PHP}/ownerships/${id}`
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const mylitterinspections = async (friendly_url) => {
  try {
    const res = await fetch(
      `${baseURL_PHP}/my-litter-inspections/${friendly_url}`
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const mylitterregistrations = async (friendly_url) => {
  try {
    const res = await fetch(
      `${baseURL_PHP}/my-litter-registrations/${friendly_url}`
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const register = async (body) => {
  var requestOptions = {
    method: "POST",
    body: body,
    redirect: "follow",
  };
  try {
    const res = await fetch(
      `${baseURL_PHP}/membership-form-save`,
      requestOptions
    );
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const userlogin = async (body) => {
  var requestOptions = {
    method: "POST",
    body: body,
    redirect: "follow",
  };
  try {
    const res = await fetch(`${baseURL_PHP}/member-login`, requestOptions);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getMemberAccounts = async (id) => {
  try {
    const res = await fetch(`${baseURL_PHP}/my-wallet/` + id);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getTransactionList = async (id) => {
  try {
    const res = await fetch(`${baseURL_PHP}/transaction-list/` + id);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const createlitinsp = async (body) => {
  var requestOptions = {
    method: "POST",
    body: body,
    redirect: "follow",
  };
  try {
    const res = await fetch(
      `${baseURL_PHP}/create-litter-inspection`,
      requestOptions
    );
    // console.log(res)
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const TransferLeaseApi = async (body) => {
  var requestOptions = {
    method: "POST",
    body: body,
    redirect: "follow",
  };
  try {
    const res = await fetch(
      `${baseURL_PHP}/ownership-transfer-lease-request`,
      requestOptions
    );
    // console.log(res)
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const saveLitterRegistration = async (body) => {
  var requestOptions = {
    method: "POST",
    body: body,
    redirect: "follow",
  };
  try {
    const res = await fetch(
      `${baseURL_PHP}/create-litter-registration`,
      requestOptions
    );
    // console.log(res)
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const saveStudCertificate = async (body) => {
  var requestOptions = {
    method: "POST",
    body: body,
    redirect: "follow",
  };
  try {
    const res = await fetch(
      `${baseURL_PHP}/create-stud-certificate`,
      requestOptions
    );
    // console.log(res)
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const saveLitterInspection = async (body) => {
  var requestOptions = {
    method: "POST",
    body: body,
    redirect: "follow",
  };
  try {
    const res = await fetch(
      `${baseURL_PHP}/create-litter-inspection`,
      requestOptions
    );
    // console.log(res)
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const updateUserProfile = async (id, body) => {
  try {
    var requestOptions = {
      method: "POST",
      body: body,
      redirect: "follow",
    };
    const res = await fetch(
      `${baseURL_PHP}/account-update/${id}`,
      requestOptions
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const updateHorseProfile = async (slug, body) => {
  try {
    var requestOptions = {
      method: "POST",
      body: body,
      redirect: "follow",
    };
    const res = await fetch(
      `${baseURL_PHP}/change-pic/${slug}`,
      requestOptions
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
