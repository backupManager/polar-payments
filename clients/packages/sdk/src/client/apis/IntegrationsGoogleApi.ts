/* tslint:disable */
/* eslint-disable */
/**
 * Polar API
 * Read the docs at https://docs.polar.sh/api
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
} from '../models/index';

export interface IntegrationsGoogleApiIntegrationsGoogleAuthorizeRequest {
    returnTo?: string | null;
    attribution?: string | null;
}

export interface IntegrationsGoogleApiIntegrationsGoogleCallbackRequest {
    code?: string | null;
    codeVerifier?: string | null;
    state?: string | null;
    error?: string | null;
}

/**
 * 
 */
export class IntegrationsGoogleApi extends runtime.BaseAPI {

    /**
     * Integrations.Google.Authorize
     */
    async integrationsGoogleAuthorizeRaw(requestParameters: IntegrationsGoogleApiIntegrationsGoogleAuthorizeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        if (requestParameters['returnTo'] != null) {
            queryParameters['return_to'] = requestParameters['returnTo'];
        }

        if (requestParameters['attribution'] != null) {
            queryParameters['attribution'] = requestParameters['attribution'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/integrations/google/authorize`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Integrations.Google.Authorize
     */
    async integrationsGoogleAuthorize(requestParameters: IntegrationsGoogleApiIntegrationsGoogleAuthorizeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.integrationsGoogleAuthorizeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Integrations.Google.Callback
     */
    async integrationsGoogleCallbackRaw(requestParameters: IntegrationsGoogleApiIntegrationsGoogleCallbackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        if (requestParameters['code'] != null) {
            queryParameters['code'] = requestParameters['code'];
        }

        if (requestParameters['codeVerifier'] != null) {
            queryParameters['code_verifier'] = requestParameters['codeVerifier'];
        }

        if (requestParameters['state'] != null) {
            queryParameters['state'] = requestParameters['state'];
        }

        if (requestParameters['error'] != null) {
            queryParameters['error'] = requestParameters['error'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/integrations/google/callback`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Integrations.Google.Callback
     */
    async integrationsGoogleCallback(requestParameters: IntegrationsGoogleApiIntegrationsGoogleCallbackRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.integrationsGoogleCallbackRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
