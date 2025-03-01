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
  IssueListResponse,
  IssueSortBy,
  PledgesTypeSummaries,
} from '../models/index';

export interface DashboardApiGetDashboardRequest {
    id: string;
    repositoryName?: string | null;
    q?: string | null;
    sort?: IssueSortBy | null;
    onlyPledged?: boolean;
    onlyBadged?: boolean;
    showClosed?: boolean;
    page?: number;
}

export interface DashboardApiGetPersonalDashboardRequest {
    q?: string | null;
    sort?: IssueSortBy | null;
    onlyPledged?: boolean;
    onlyBadged?: boolean;
    showClosed?: boolean;
    page?: number;
}

/**
 * 
 */
export class DashboardApi extends runtime.BaseAPI {

    /**
     * Dummy Do Not Use
     */
    async dummyDoNotUseRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PledgesTypeSummaries>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/dashboard/dummy_do_not_use`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Dummy Do Not Use
     */
    async dummyDoNotUse(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PledgesTypeSummaries> {
        const response = await this.dummyDoNotUseRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get Dashboard
     */
    async getDashboardRaw(requestParameters: DashboardApiGetDashboardRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IssueListResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getDashboard().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['repositoryName'] != null) {
            queryParameters['repository_name'] = requestParameters['repositoryName'];
        }

        if (requestParameters['q'] != null) {
            queryParameters['q'] = requestParameters['q'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        if (requestParameters['onlyPledged'] != null) {
            queryParameters['only_pledged'] = requestParameters['onlyPledged'];
        }

        if (requestParameters['onlyBadged'] != null) {
            queryParameters['only_badged'] = requestParameters['onlyBadged'];
        }

        if (requestParameters['showClosed'] != null) {
            queryParameters['show_closed'] = requestParameters['showClosed'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
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
            path: `/v1/dashboard/organization/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Dashboard
     */
    async getDashboard(requestParameters: DashboardApiGetDashboardRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IssueListResponse> {
        const response = await this.getDashboardRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Personal Dashboard
     */
    async getPersonalDashboardRaw(requestParameters: DashboardApiGetPersonalDashboardRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IssueListResponse>> {
        const queryParameters: any = {};

        if (requestParameters['q'] != null) {
            queryParameters['q'] = requestParameters['q'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        if (requestParameters['onlyPledged'] != null) {
            queryParameters['only_pledged'] = requestParameters['onlyPledged'];
        }

        if (requestParameters['onlyBadged'] != null) {
            queryParameters['only_badged'] = requestParameters['onlyBadged'];
        }

        if (requestParameters['showClosed'] != null) {
            queryParameters['show_closed'] = requestParameters['showClosed'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
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
            path: `/v1/dashboard/personal`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Personal Dashboard
     */
    async getPersonalDashboard(requestParameters: DashboardApiGetPersonalDashboardRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IssueListResponse> {
        const response = await this.getPersonalDashboardRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
