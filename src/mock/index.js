import { createServer } from "miragejs";
import appConfig from "../configs/app.config";

import { signInUserData } from "./data/authData";
import {facilitiesList,define_accomodation} from "./data/settings";

import { authFakeApi } from "./fakeApi";
import {Define_Accomodation,Features} from "./settingsApi"
const { apiPrefix } = appConfig;

function mockRunner({environment}) {
  return createServer({
    environment,
    seeds(server) {
      server.db.loadData({
        signInUserData,
        facilitiesList,
        define_accomodation
      });
    },
    routes() {
      this.urlPrefix = "";
      this.namespace = "";
      this.passthrough((request) => {
        const isExternal = request.url.startsWith("http");
        return isExternal;
      });
      this.passthrough();

      authFakeApi(this, apiPrefix);
      Define_Accomodation(this,apiPrefix)
      Features(this,apiPrefix);
    },
  });
}

export default mockRunner;
