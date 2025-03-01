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
  BenefitIDFilter,
  HTTPValidationError,
  ListResourceProduct,
  NotPermitted,
  OrganizationIDFilter1,
  Product,
  ProductBenefitsUpdate,
  ProductCreate,
  ProductSortProperty,
  ProductUpdate,
  ResourceNotFound,
} from '../models/index';

export interface ProductsApiCreateRequest {
    body: ProductCreate;
}

export interface ProductsApiGetRequest {
    id: string;
}

export interface ProductsApiListRequest {
    organizationId?: OrganizationIDFilter1 | null;
    query?: string | null;
    isArchived?: boolean | null;
    isRecurring?: boolean | null;
    benefitId?: BenefitIDFilter | null;
    page?: number;
    limit?: number;
    sorting?: Array<ProductSortProperty> | null;
}

export interface ProductsApiUpdateRequest {
    id: string;
    body: ProductUpdate;
}

export interface ProductsApiUpdateBenefitsRequest {
    id: string;
    body: ProductBenefitsUpdate;
}

/**
 * 
 */
export class ProductsApi extends runtime.BaseAPI {

    /**
     * Create a product.
     * Create Product
     */
    async createRaw(requestParameters: ProductsApiCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Product>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling create().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/products/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create a product.
     * Create Product
     */
    async create(requestParameters: ProductsApiCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Product> {
        const response = await this.createRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a product by ID.
     * Get Product
     */
    async getRaw(requestParameters: ProductsApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Product>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling get().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/products/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a product by ID.
     * Get Product
     */
    async get(requestParameters: ProductsApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Product> {
        const response = await this.getRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List products.
     * List Products
     */
    async listRaw(requestParameters: ProductsApiListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResourceProduct>> {
        const queryParameters: any = {};

        if (requestParameters['organizationId'] != null) {
            queryParameters['organization_id'] = requestParameters['organizationId'];
        }

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        if (requestParameters['isArchived'] != null) {
            queryParameters['is_archived'] = requestParameters['isArchived'];
        }

        if (requestParameters['isRecurring'] != null) {
            queryParameters['is_recurring'] = requestParameters['isRecurring'];
        }

        if (requestParameters['benefitId'] != null) {
            queryParameters['benefit_id'] = requestParameters['benefitId'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['sorting'] != null) {
            queryParameters['sorting'] = requestParameters['sorting'];
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
            path: `/v1/products/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * List products.
     * List Products
     */
    async list(requestParameters: ProductsApiListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResourceProduct> {
        const response = await this.listRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a product.
     * Update Product
     */
    async updateRaw(requestParameters: ProductsApiUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Product>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling update().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling update().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/products/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update a product.
     * Update Product
     */
    async update(requestParameters: ProductsApiUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Product> {
        const response = await this.updateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update benefits granted by a product.
     * Update Product Benefits
     */
    async updateBenefitsRaw(requestParameters: ProductsApiUpdateBenefitsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Product>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateBenefits().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling updateBenefits().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/products/{id}/benefits`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update benefits granted by a product.
     * Update Product Benefits
     */
    async updateBenefits(requestParameters: ProductsApiUpdateBenefitsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Product> {
        const response = await this.updateBenefitsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
