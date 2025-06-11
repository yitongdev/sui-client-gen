import * as reified from "../../../_framework/reified.js";
import {
  ID,
  UID,
} from "../../../_dependencies/onchain/0x2/object/structs/index.js";
import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  fieldToJSON,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { Vector } from "../../../_framework/vector.js";
import { PKG_V1 } from "../../constants.js";
import { Decimal } from "../../decimal/structs/index.js";
import { UserRewardManager } from "../../liquidity-mining/structs/index.js";
import { Borrow as Borrow1 } from "./Borrow.js";
import { Deposit as Deposit1 } from "./Deposit.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isObligation(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::obligation::Obligation` + "<");
}

export interface ObligationFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
  lendingMarketId: ToField<ID>;
  deposits: ToField<Vector<Deposit1>>;
  borrows: ToField<Vector<Borrow1>>;
  depositedValueUsd: ToField<Decimal>;
  allowedBorrowValueUsd: ToField<Decimal>;
  unhealthyBorrowValueUsd: ToField<Decimal>;
  superUnhealthyBorrowValueUsd: ToField<Decimal>;
  unweightedBorrowedValueUsd: ToField<Decimal>;
  weightedBorrowedValueUsd: ToField<Decimal>;
  weightedBorrowedValueUpperBoundUsd: ToField<Decimal>;
  borrowingIsolatedAsset: ToField<"bool">;
  userRewardManagers: ToField<Vector<UserRewardManager>>;
  badDebtUsd: ToField<Decimal>;
  closable: ToField<"bool">;
}

export type ObligationReified<T0 extends PhantomTypeArgument> = Reified<
  Obligation<T0>,
  ObligationFields<T0>
>;

/**
 * Move struct: `Obligation`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class Obligation<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::obligation::Obligation`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = Obligation.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::obligation::Obligation<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = Obligation.$isPhantom;

  readonly id: ToField<UID>;
  readonly lendingMarketId: ToField<ID>;
  readonly deposits: ToField<Vector<Deposit1>>;
  readonly borrows: ToField<Vector<Borrow1>>;
  readonly depositedValueUsd: ToField<Decimal>;
  readonly allowedBorrowValueUsd: ToField<Decimal>;
  readonly unhealthyBorrowValueUsd: ToField<Decimal>;
  readonly superUnhealthyBorrowValueUsd: ToField<Decimal>;
  readonly unweightedBorrowedValueUsd: ToField<Decimal>;
  readonly weightedBorrowedValueUsd: ToField<Decimal>;
  readonly weightedBorrowedValueUpperBoundUsd: ToField<Decimal>;
  readonly borrowingIsolatedAsset: ToField<"bool">;
  readonly userRewardManagers: ToField<Vector<UserRewardManager>>;
  readonly badDebtUsd: ToField<Decimal>;
  readonly closable: ToField<"bool">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>],
    fields: ObligationFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      Obligation.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::obligation::Obligation<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.lendingMarketId = fields.lendingMarketId;
    this.deposits = fields.deposits;
    this.borrows = fields.borrows;
    this.depositedValueUsd = fields.depositedValueUsd;
    this.allowedBorrowValueUsd = fields.allowedBorrowValueUsd;
    this.unhealthyBorrowValueUsd = fields.unhealthyBorrowValueUsd;
    this.superUnhealthyBorrowValueUsd = fields.superUnhealthyBorrowValueUsd;
    this.unweightedBorrowedValueUsd = fields.unweightedBorrowedValueUsd;
    this.weightedBorrowedValueUsd = fields.weightedBorrowedValueUsd;
    this.weightedBorrowedValueUpperBoundUsd =
      fields.weightedBorrowedValueUpperBoundUsd;
    this.borrowingIsolatedAsset = fields.borrowingIsolatedAsset;
    this.userRewardManagers = fields.userRewardManagers;
    this.badDebtUsd = fields.badDebtUsd;
    this.closable = fields.closable;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): ObligationReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: Obligation.$typeName,
      fullTypeName: composeSuiType(
        Obligation.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V1}::obligation::Obligation<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
      ],
      isPhantom: Obligation.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        Obligation.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Obligation.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => Obligation.fromBcs(T0, data),
      bcs: Obligation.bcs,
      fromJSONField: (field: any) => Obligation.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => Obligation.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Obligation.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Obligation.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        Obligation.fetch(client, T0, id),
      new: (fields: ObligationFields<ToPhantomTypeArgument<T0>>) => {
        return new Obligation([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Obligation.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<Obligation<ToPhantomTypeArgument<T0>>>> {
    return phantom(Obligation.reified(T0));
  }
  static get p() {
    return Obligation.phantom;
  }

  static get bcs() {
    return bcs.struct("Obligation", {
      id: UID.bcs,
      lending_market_id: ID.bcs,
      deposits: bcs.vector(Deposit1.bcs),
      borrows: bcs.vector(Borrow1.bcs),
      deposited_value_usd: Decimal.bcs,
      allowed_borrow_value_usd: Decimal.bcs,
      unhealthy_borrow_value_usd: Decimal.bcs,
      super_unhealthy_borrow_value_usd: Decimal.bcs,
      unweighted_borrowed_value_usd: Decimal.bcs,
      weighted_borrowed_value_usd: Decimal.bcs,
      weighted_borrowed_value_upper_bound_usd: Decimal.bcs,
      borrowing_isolated_asset: bcs.bool(),
      user_reward_managers: bcs.vector(UserRewardManager.bcs),
      bad_debt_usd: Decimal.bcs,
      closable: bcs.bool(),
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): Obligation<ToPhantomTypeArgument<T0>> {
    return Obligation.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      lendingMarketId: decodeFromFields(ID.reified(), fields.lending_market_id),
      deposits: decodeFromFields(
        reified.vector(Deposit1.reified()),
        fields.deposits,
      ),
      borrows: decodeFromFields(
        reified.vector(Borrow1.reified()),
        fields.borrows,
      ),
      depositedValueUsd: decodeFromFields(
        Decimal.reified(),
        fields.deposited_value_usd,
      ),
      allowedBorrowValueUsd: decodeFromFields(
        Decimal.reified(),
        fields.allowed_borrow_value_usd,
      ),
      unhealthyBorrowValueUsd: decodeFromFields(
        Decimal.reified(),
        fields.unhealthy_borrow_value_usd,
      ),
      superUnhealthyBorrowValueUsd: decodeFromFields(
        Decimal.reified(),
        fields.super_unhealthy_borrow_value_usd,
      ),
      unweightedBorrowedValueUsd: decodeFromFields(
        Decimal.reified(),
        fields.unweighted_borrowed_value_usd,
      ),
      weightedBorrowedValueUsd: decodeFromFields(
        Decimal.reified(),
        fields.weighted_borrowed_value_usd,
      ),
      weightedBorrowedValueUpperBoundUsd: decodeFromFields(
        Decimal.reified(),
        fields.weighted_borrowed_value_upper_bound_usd,
      ),
      borrowingIsolatedAsset: decodeFromFields(
        "bool",
        fields.borrowing_isolated_asset,
      ),
      userRewardManagers: decodeFromFields(
        reified.vector(UserRewardManager.reified()),
        fields.user_reward_managers,
      ),
      badDebtUsd: decodeFromFields(Decimal.reified(), fields.bad_debt_usd),
      closable: decodeFromFields("bool", fields.closable),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): Obligation<ToPhantomTypeArgument<T0>> {
    if (!isObligation(item.type)) {
      throw new Error("not a Obligation type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Obligation.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      lendingMarketId: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.lending_market_id,
      ),
      deposits: decodeFromFieldsWithTypes(
        reified.vector(Deposit1.reified()),
        item.fields.deposits,
      ),
      borrows: decodeFromFieldsWithTypes(
        reified.vector(Borrow1.reified()),
        item.fields.borrows,
      ),
      depositedValueUsd: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.deposited_value_usd,
      ),
      allowedBorrowValueUsd: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.allowed_borrow_value_usd,
      ),
      unhealthyBorrowValueUsd: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.unhealthy_borrow_value_usd,
      ),
      superUnhealthyBorrowValueUsd: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.super_unhealthy_borrow_value_usd,
      ),
      unweightedBorrowedValueUsd: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.unweighted_borrowed_value_usd,
      ),
      weightedBorrowedValueUsd: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.weighted_borrowed_value_usd,
      ),
      weightedBorrowedValueUpperBoundUsd: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.weighted_borrowed_value_upper_bound_usd,
      ),
      borrowingIsolatedAsset: decodeFromFieldsWithTypes(
        "bool",
        item.fields.borrowing_isolated_asset,
      ),
      userRewardManagers: decodeFromFieldsWithTypes(
        reified.vector(UserRewardManager.reified()),
        item.fields.user_reward_managers,
      ),
      badDebtUsd: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.bad_debt_usd,
      ),
      closable: decodeFromFieldsWithTypes("bool", item.fields.closable),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): Obligation<ToPhantomTypeArgument<T0>> {
    return Obligation.fromFields(typeArg, Obligation.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      lendingMarketId: this.lendingMarketId,
      deposits: fieldToJSON<Vector<Deposit1>>(
        `vector<${Deposit1.$typeName}>`,
        this.deposits,
      ),
      borrows: fieldToJSON<Vector<Borrow1>>(
        `vector<${Borrow1.$typeName}>`,
        this.borrows,
      ),
      depositedValueUsd: this.depositedValueUsd.toJSONField(),
      allowedBorrowValueUsd: this.allowedBorrowValueUsd.toJSONField(),
      unhealthyBorrowValueUsd: this.unhealthyBorrowValueUsd.toJSONField(),
      superUnhealthyBorrowValueUsd:
        this.superUnhealthyBorrowValueUsd.toJSONField(),
      unweightedBorrowedValueUsd: this.unweightedBorrowedValueUsd.toJSONField(),
      weightedBorrowedValueUsd: this.weightedBorrowedValueUsd.toJSONField(),
      weightedBorrowedValueUpperBoundUsd:
        this.weightedBorrowedValueUpperBoundUsd.toJSONField(),
      borrowingIsolatedAsset: this.borrowingIsolatedAsset,
      userRewardManagers: fieldToJSON<Vector<UserRewardManager>>(
        `vector<${UserRewardManager.$typeName}>`,
        this.userRewardManagers,
      ),
      badDebtUsd: this.badDebtUsd.toJSONField(),
      closable: this.closable,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): Obligation<ToPhantomTypeArgument<T0>> {
    return Obligation.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      lendingMarketId: decodeFromJSONField(ID.reified(), field.lendingMarketId),
      deposits: decodeFromJSONField(
        reified.vector(Deposit1.reified()),
        field.deposits,
      ),
      borrows: decodeFromJSONField(
        reified.vector(Borrow1.reified()),
        field.borrows,
      ),
      depositedValueUsd: decodeFromJSONField(
        Decimal.reified(),
        field.depositedValueUsd,
      ),
      allowedBorrowValueUsd: decodeFromJSONField(
        Decimal.reified(),
        field.allowedBorrowValueUsd,
      ),
      unhealthyBorrowValueUsd: decodeFromJSONField(
        Decimal.reified(),
        field.unhealthyBorrowValueUsd,
      ),
      superUnhealthyBorrowValueUsd: decodeFromJSONField(
        Decimal.reified(),
        field.superUnhealthyBorrowValueUsd,
      ),
      unweightedBorrowedValueUsd: decodeFromJSONField(
        Decimal.reified(),
        field.unweightedBorrowedValueUsd,
      ),
      weightedBorrowedValueUsd: decodeFromJSONField(
        Decimal.reified(),
        field.weightedBorrowedValueUsd,
      ),
      weightedBorrowedValueUpperBoundUsd: decodeFromJSONField(
        Decimal.reified(),
        field.weightedBorrowedValueUpperBoundUsd,
      ),
      borrowingIsolatedAsset: decodeFromJSONField(
        "bool",
        field.borrowingIsolatedAsset,
      ),
      userRewardManagers: decodeFromJSONField(
        reified.vector(UserRewardManager.reified()),
        field.userRewardManagers,
      ),
      badDebtUsd: decodeFromJSONField(Decimal.reified(), field.badDebtUsd),
      closable: decodeFromJSONField("bool", field.closable),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): Obligation<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== Obligation.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Obligation.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Obligation.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): Obligation<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isObligation(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Obligation object`,
      );
    }
    return Obligation.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): Obligation<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isObligation(data.bcs.type)) {
        throw new Error(`object at is not a Obligation object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return Obligation.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Obligation.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<Obligation<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Obligation object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isObligation(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Obligation object`);
    }

    return Obligation.fromSuiObjectData(typeArg, res.data);
  }
}
