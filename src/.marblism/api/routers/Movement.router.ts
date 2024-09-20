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

        createMany: procedure.input($Schema.MovementInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).movement.createMany(input as any))),

        create: procedure.input($Schema.MovementInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).movement.create(input as any))),

        deleteMany: procedure.input($Schema.MovementInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).movement.deleteMany(input as any))),

        delete: procedure.input($Schema.MovementInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).movement.delete(input as any))),

        findFirst: procedure.input($Schema.MovementInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).movement.findFirst(input as any))),

        findMany: procedure.input($Schema.MovementInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).movement.findMany(input as any))),

        findUnique: procedure.input($Schema.MovementInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).movement.findUnique(input as any))),

        updateMany: procedure.input($Schema.MovementInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).movement.updateMany(input as any))),

        update: procedure.input($Schema.MovementInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).movement.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.MovementCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MovementCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MovementCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MovementCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.MovementCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MovementCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MovementGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MovementGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MovementCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MovementCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MovementGetPayload<T>, Context>) => Promise<Prisma.MovementGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.MovementDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MovementDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MovementDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MovementDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.MovementDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MovementDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MovementGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MovementGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MovementDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MovementDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MovementGetPayload<T>, Context>) => Promise<Prisma.MovementGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.MovementFindFirstArgs, TData = Prisma.MovementGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MovementFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MovementGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MovementFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MovementFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MovementGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MovementGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.MovementFindManyArgs, TData = Array<Prisma.MovementGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.MovementFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.MovementGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MovementFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MovementFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.MovementGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.MovementGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.MovementFindUniqueArgs, TData = Prisma.MovementGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MovementFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MovementGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MovementFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MovementFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MovementGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MovementGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.MovementUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MovementUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MovementUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MovementUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.MovementUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MovementUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MovementGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MovementGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MovementUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MovementUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MovementGetPayload<T>, Context>) => Promise<Prisma.MovementGetPayload<T>>
            };

    };
}
