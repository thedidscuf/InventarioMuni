/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createRoleDataRouter from "./RoleData.router";
import createLocationRouter from "./Location.router";
import createSupplierRouter from "./Supplier.router";
import createProductRouter from "./Product.router";
import createInventoryRouter from "./Inventory.router";
import createMovementRouter from "./Movement.router";
import createDepartmentRouter from "./Department.router";
import createReportRouter from "./Report.router";
import createUserRouter from "./User.router";
import createAccountRouter from "./Account.router";
import createRagVectorRouter from "./RagVector.router";
import createSessionRouter from "./Session.router";
import { ClientType as RoleDataClientType } from "./RoleData.router";
import { ClientType as LocationClientType } from "./Location.router";
import { ClientType as SupplierClientType } from "./Supplier.router";
import { ClientType as ProductClientType } from "./Product.router";
import { ClientType as InventoryClientType } from "./Inventory.router";
import { ClientType as MovementClientType } from "./Movement.router";
import { ClientType as DepartmentClientType } from "./Department.router";
import { ClientType as ReportClientType } from "./Report.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as RagVectorClientType } from "./RagVector.router";
import { ClientType as SessionClientType } from "./Session.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        roleData: createRoleDataRouter(router, procedure),
        location: createLocationRouter(router, procedure),
        supplier: createSupplierRouter(router, procedure),
        product: createProductRouter(router, procedure),
        inventory: createInventoryRouter(router, procedure),
        movement: createMovementRouter(router, procedure),
        department: createDepartmentRouter(router, procedure),
        report: createReportRouter(router, procedure),
        user: createUserRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        ragVector: createRagVectorRouter(router, procedure),
        session: createSessionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    roleData: RoleDataClientType<AppRouter>;
    location: LocationClientType<AppRouter>;
    supplier: SupplierClientType<AppRouter>;
    product: ProductClientType<AppRouter>;
    inventory: InventoryClientType<AppRouter>;
    movement: MovementClientType<AppRouter>;
    department: DepartmentClientType<AppRouter>;
    report: ReportClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    ragVector: RagVectorClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
}
