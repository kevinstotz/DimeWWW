// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
import { enableProdMode } from '@angular/core';
import { environment } from './environment';

export class Environment  {
    public global: any;
    public api: any;
    private PRODUCTION: boolean;
    private SECURE: string;
    private UNSECURE: string;
    private COOKIE_EXPIRATION: Date;
    private PROTOCOL: string;
    private DOMAIN: string;

    private API_HOSTNAME: string;
    private API_PATH: string;
    private API_URL: string;
    private API_PORT: number;

    private DASHBOARD_HOSTNAME: string;
    private DASHBOARD_URL: string;
    private DASHBOARD_PORT: number;

    private WEBSITE_HOSTNAME: string;
    private WEBSITE_URL: string;
    private WEBSITE_PORT: number;

    private CONTACTUS_URL: string;
    private COIN_NEWS_URL: string;
    private FORGOT_PASSWORD_URL: string;
    private LOGIN_URL: string;
    private GET_USER_ID_URL: string;
    private NEWSLETTER_URL: string;
    private RESET_PASSWORD_URL: string;
    private REGISTER_URL: string;
    private REGISTER_VERIFY_URL: string;
    private REGISTER_AFFILIATE_URL: string;

    private DIME_PIE_CHART_URL: string;
    private DIME_TABLE_CHART_URL: string;
    private DIME_LINE_CHART_URL: string;
    private DIME_REBALANCE_DATES_AND_VALUES_URL: string;

    constructor() {
        this.SECURE = 'https://';
        this.UNSECURE = 'http://';

        if (environment.envName == 'dev') {
            this.PRODUCTION = false;
            this.PROTOCOL = this.UNSECURE;
            this.DOMAIN = '.yogishouse.com';

            this.API_HOSTNAME = 'api.dime';
            this.API_PORT = 10006;
            this.API_PATH = '/api';
            this.API_URL = this.PROTOCOL.concat(this.API_HOSTNAME, this.DOMAIN, ":", this.API_PORT.toString());

            this.DASHBOARD_HOSTNAME = 'dashboard.dime';
            this.DASHBOARD_PORT = 10005;
            this.DASHBOARD_URL = this.PROTOCOL.concat(this.DASHBOARD_HOSTNAME, this.DOMAIN, ":", this.DASHBOARD_PORT.toString());

            this.WEBSITE_HOSTNAME = 'www.dime';
            this.WEBSITE_PORT = 10004;
            this.WEBSITE_URL = this.PROTOCOL.concat(this.WEBSITE_HOSTNAME, this.DOMAIN, ":", this.WEBSITE_PORT.toString());

            this.COOKIE_EXPIRATION = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        }
        if (environment.envName == 'prod') {
          //  enableProdMode();
            this.PRODUCTION = true;
            this.PROTOCOL = this.SECURE;
            this.DOMAIN = '.yogishouse.com';

            this.API_HOSTNAME = 'api';
            this.API_PORT = 443;
            this.API_PATH = '/api';
            this.API_URL = this.PROTOCOL.concat(this.API_HOSTNAME, this.DOMAIN);

            this.DASHBOARD_HOSTNAME = 'dashboard';
            this.DASHBOARD_PORT = 443;
            this.DASHBOARD_URL = this.PROTOCOL.concat(this.DASHBOARD_HOSTNAME, this.DOMAIN);

            this.WEBSITE_HOSTNAME = 'www';
            this.WEBSITE_PORT = 443;
            this.WEBSITE_URL = this.PROTOCOL.concat(this.WEBSITE_HOSTNAME, this.DOMAIN);

            this.COOKIE_EXPIRATION = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        }
        if (environment.envName == 'qa') {}
        if (environment.envName == '') {console.log("env not found");}
        this.FORGOT_PASSWORD_URL = this.API_URL.concat(this.API_PATH + '/forgot-password/');
        this.LOGIN_URL = this.API_URL.concat(this.API_PATH, '/o/token/');
        this.GET_USER_ID_URL = this.API_URL.concat(this.API_PATH, '/account/');
        this.COIN_NEWS_URL = this.API_URL.concat(this.API_PATH + '/fund/coinnews/');
        this.CONTACTUS_URL = this.API_URL.concat(this.API_PATH, '/contactus/');
        this.NEWSLETTER_URL = this.API_URL.concat(this.API_PATH + '/newsletter/');
        this.RESET_PASSWORD_URL = this.API_URL.concat(this.API_PATH + '/reset-password/');
        this.REGISTER_URL = this.API_URL.concat(this.API_PATH, '/register/user/');
        this.REGISTER_AFFILIATE_URL = this.API_URL.concat(this.API_PATH, '/register/affiliate/');
        this.REGISTER_VERIFY_URL = this.API_URL.concat(this.API_PATH, '/register/verify/');
        this.DIME_TABLE_CHART_URL = this.API_URL.concat(this.API_PATH, '/fund/tablechart/');
        this.DIME_LINE_CHART_URL = this.API_URL.concat(this.API_PATH, '/fund/linechart/');
        this.DIME_PIE_CHART_URL = this.API_URL.concat(this.API_PATH, '/fund/piechart/');
        this.DIME_REBALANCE_DATES_AND_VALUES_URL = this.API_URL.concat(this.API_PATH, '/fund/rebalancedatesandvalues/');

        this.global = {
            'PRODUCTION':         this.PRODUCTION,
            'COOKIE_EXPIRATION':  this.COOKIE_EXPIRATION,
            'DOMAIN':             this.DOMAIN,
            'DASHBOARD_PORT':     this.DASHBOARD_PORT,
            'DASHBOARD_URL':      this.DASHBOARD_URL,
            'DASHBOARD_HOSTNAME': this.DASHBOARD_HOSTNAME,
            'WEBSITE_PORT':       this.WEBSITE_PORT,
            'WEBSITE_URL':        this.WEBSITE_URL,
            'WEBSITE_HOSTNAME':   this.WEBSITE_HOSTNAME,
            'WEBSITE_HOME':       "/"
        }

        this.api = {
            'API_PORT':             this.API_PORT,
            'API_URL':              this.API_URL,
            'API_HOSTNAME':         this.API_HOSTNAME,
            'API_PATH':             this.API_PATH,
            'COIN_NEWS_URL':        this.COIN_NEWS_URL,
            'CONTACTUS_URL':        this.CONTACTUS_URL,
            'NEWSLETTER_URL':       this.NEWSLETTER_URL,
            'LOGIN_URL':            this.LOGIN_URL,
            'GET_USER_ID_URL':      this.GET_USER_ID_URL,
            'DIME_LINE_CHART_URL':  this.DIME_LINE_CHART_URL,
            'DIME_PIE_CHART_URL':   this.DIME_PIE_CHART_URL,
            'DIME_REBALANCE_DATES_AND_VALUES_URL': this.DIME_REBALANCE_DATES_AND_VALUES_URL,
            'DIME_TABLE_CHART_URL': this.DIME_TABLE_CHART_URL,
            'FORGOT_PASSWORD_URL':  this.FORGOT_PASSWORD_URL,
            'RESET_PASSWORD_URL':   this.RESET_PASSWORD_URL,
            'REGISTER_URL':         this.REGISTER_URL,
            'REGISTER_VERIFY_URL':  this.REGISTER_VERIFY_URL,
            'REGISTER_AFFILIATE_URL':this.REGISTER_AFFILIATE_URL
        }
    }
}
