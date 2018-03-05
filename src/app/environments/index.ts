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

    private FORGOT_PASSWORD_URL: string;
    private NEWSLETTER_URL: string;
    private LOGIN_URL: string;
    private REGISTER_URL: string;
    private REGISTER_VERIFY_URL: string;
    private REGISTER_AFFILIATE_URL: string;
    private CONTACTUS_URL: string;

    private DIME_PIE_CHART: string;
    private DIME_TABLE_CHART: string;
    private DIME_LINE_CHART: string;
    private DIME_REBALANCE_DATES_AND_VALUES: string;

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

            this.API_HOSTNAME = 'api-dime';
            this.API_PORT = 443;
            this.API_PATH = '/api';
            this.API_URL = this.PROTOCOL.concat(this.API_HOSTNAME, this.DOMAIN);

            this.DASHBOARD_HOSTNAME = 'dashboard-dime';
            this.DASHBOARD_PORT = 443;
            this.DASHBOARD_URL = this.PROTOCOL.concat(this.DASHBOARD_HOSTNAME, this.DOMAIN);

            this.WEBSITE_HOSTNAME = 'www-dime';
            this.WEBSITE_PORT = 443;
            this.WEBSITE_URL = this.PROTOCOL.concat(this.WEBSITE_HOSTNAME, this.DOMAIN);

            this.COOKIE_EXPIRATION = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        }
        if (environment.envName == 'qa') {}
        if (environment.envName == '') {console.log("env not found");}
        this.NEWSLETTER_URL = this.API_URL.concat(this.API_PATH + '/newsletter/');
        this.FORGOT_PASSWORD_URL = this.API_URL.concat(this.API_PATH + '/forgot-password/');
        this.LOGIN_URL = this.API_URL.concat(this.API_PATH, '/o/token/');
        this.REGISTER_URL = this.API_URL.concat(this.API_PATH, '/register/');
        this.REGISTER_AFFILIATE_URL = this.API_URL.concat(this.API_PATH, '/affiliate/register/');
        this.REGISTER_VERIFY_URL = this.API_URL.concat(this.API_PATH, '/register/verify/');
        this.DIME_LINE_CHART = this.API_URL.concat(this.API_PATH, '/dime/linechart/');
        this.DIME_TABLE_CHART = this.API_URL.concat(this.API_PATH, '/dime/tablechart/');
        this.DIME_PIE_CHART = this.API_URL.concat(this.API_PATH, '/dime/piechart/');
        this.DIME_REBALANCE_DATES_AND_VALUES = this.API_URL.concat(this.API_PATH, '/dime/rebalancedatesandvalues/');
        this.CONTACTUS_URL = this.API_URL.concat(this.API_PATH, '/contactus/');

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
            'CONTACTUS_URL':        this.CONTACTUS_URL,
            'NEWSLETTER_URL':       this.NEWSLETTER_URL,
            'LOGIN_URL':            this.LOGIN_URL,
            'DIME_LINE_CHART':      this.DIME_LINE_CHART,
            'DIME_PIE_CHART':       this.DIME_PIE_CHART,
            'DIME_REBALANCE_DATES_AND_VALUES': this.DIME_REBALANCE_DATES_AND_VALUES,
            'DIME_TABLE_CHART':     this.DIME_TABLE_CHART,
            'REGISTER_URL':         this.REGISTER_URL,
            'FORGOT_PASSWORD_URL':  this.FORGOT_PASSWORD_URL,
            'REGISTER_VERIFY_URL':  this.REGISTER_VERIFY_URL,
            'REGISTER_AFFILIATE_URL':this.REGISTER_AFFILIATE_URL
        }
    }
}
