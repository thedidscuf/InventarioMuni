/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ReportInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).report.createMany(input as any))),

        create: procedure.input($Schema.ReportInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).report.create(input as any))),

        deleteMany: procedure.input($Schema.ReportInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).report.deleteMany(input as any))),

        delete: procedure.input($Schema.ReportInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).report.delete(input as any))),

        findFirst: procedure.input($Schema.ReportInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).report.findFirst(input as any))),

        findMany: procedure.input($Schema.ReportInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).report.findMany(input as any))),

        findUnique: procedure.input($Schema.ReportInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).report.findUnique(input as any))),

        updateMany: procedure.input($Schema.ReportInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).report.updateMany(input as any))),

        update: procedure.input($Schema.ReportInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).report.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ReportCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReportCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReportCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReportCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ReportCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReportCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ReportGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ReportGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReportCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReportCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ReportGetPayload<T>, Context>) => Promise<Prisma.ReportGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ReportDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReportDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReportDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReportDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ReportDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReportDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ReportGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ReportGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReportDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReportDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ReportGetPayload<T>, Context>) => Promise<Prisma.ReportGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ReportFindFirstArgs, TData = Prisma.ReportGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ReportFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ReportGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ReportFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ReportFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ReportGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ReportGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ReportFindManyArgs, TData = Array<Prisma.ReportGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ReportFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ReportGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ReportFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ReportFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ReportGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ReportGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ReportFindUniqueArgs, TData = Prisma.ReportGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ReportFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ReportGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ReportFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ReportFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ReportGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ReportGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ReportUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReportUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReportUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReportUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ReportUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReportUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ReportGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ReportGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReportUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReportUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ReportGetPayload<T>, Context>) => Promise<Prisma.ReportGetPayload<T>>
            };

    };
}
