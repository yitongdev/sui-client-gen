import * as reified from "../../../_framework/reified.js";
import { ObjectTable } from "../../../_dependencies/onchain/0x2/object-table/structs/index.js";
import { ID, UID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
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
  ToTypeStr as ToPhantom,
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
import { Obligation } from "../../obligation/structs/index.js";
import { RateLimiter } from "../../rate-limiter/structs/index.js";
import { Reserve } from "../../reserve/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isLendingMarket(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::lending_market::LendingMarket` + "<");
}

export interface LendingMarketFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
  version: ToField<"u64">;
  reserves: ToField<Vector<Reserve<T0>>>;
  obligations: ToField<ObjectTable<ToPhantom<ID>, ToPhantom<Obligation<T0>>>>;
  rateLimiter: ToField<RateLimiter>;
  feeReceiver: ToField<"address">;
  badDebtUsd: ToField<Decimal>;
  badDebtLimitUsd: ToField<Decimal>;
}

export type LendingMarketReified<T0 extends PhantomTypeArgument> = Reified<
  LendingMarket<T0>,
  LendingMarketFields<T0>
>;

/**
 * Move struct: `LendingMarket`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class LendingMarket<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::lending_market::LendingMarket`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = LendingMarket.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::lending_market::LendingMarket<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = LendingMarket.$isPhantom;

  readonly id: ToField<UID>;
  readonly version: ToField<"u64">;
  readonly reserves: ToField<Vector<Reserve<T0>>>;
  readonly obligations: ToField<ObjectTable<ToPhantom<ID>, ToPhantom<Obligation<T0>>>>;
  readonly rateLimiter: ToField<RateLimiter>;
  readonly feeReceiver: ToField<"address">;
  readonly badDebtUsd: ToField<Decimal>;
  readonly badDebtLimitUsd: ToField<Decimal>;

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: LendingMarketFields<T0>) {
    this.$fullTypeName = composeSuiType(
      LendingMarket.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::lending_market::LendingMarket<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.version = fields.version;
    this.reserves = fields.reserves;
    this.obligations = fields.obligations;
    this.rateLimiter = fields.rateLimiter;
    this.feeReceiver = fields.feeReceiver;
    this.badDebtUsd = fields.badDebtUsd;
    this.badDebtLimitUsd = fields.badDebtLimitUsd;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): LendingMarketReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: LendingMarket.$typeName,
      fullTypeName: composeSuiType(
        LendingMarket.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V1}::lending_market::LendingMarket<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      isPhantom: LendingMarket.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => LendingMarket.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => LendingMarket.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => LendingMarket.fromBcs(T0, data),
      bcs: LendingMarket.bcs,
      fromJSONField: (field: any) => LendingMarket.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => LendingMarket.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => LendingMarket.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) => LendingMarket.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) => LendingMarket.fetch(client, T0, id),
      new: (fields: LendingMarketFields<ToPhantomTypeArgument<T0>>) => {
        return new LendingMarket([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return LendingMarket.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<LendingMarket<ToPhantomTypeArgument<T0>>>> {
    return phantom(LendingMarket.reified(T0));
  }
  static get p() {
    return LendingMarket.phantom;
  }

  static get bcs() {
    return bcs.struct("LendingMarket", {
      id: UID.bcs,
      version: bcs.u64(),
      reserves: bcs.vector(Reserve.bcs),
      obligations: ObjectTable.bcs,
      rate_limiter: RateLimiter.bcs,
      fee_receiver: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      bad_debt_usd: Decimal.bcs,
      bad_debt_limit_usd: Decimal.bcs,
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): LendingMarket<ToPhantomTypeArgument<T0>> {
    return LendingMarket.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      version: decodeFromFields("u64", fields.version),
      reserves: decodeFromFields(reified.vector(Reserve.reified(typeArg)), fields.reserves),
      obligations: decodeFromFields(
        ObjectTable.reified(
          reified.phantom(ID.reified()),
          reified.phantom(Obligation.reified(typeArg)),
        ),
        fields.obligations,
      ),
      rateLimiter: decodeFromFields(RateLimiter.reified(), fields.rate_limiter),
      feeReceiver: decodeFromFields("address", fields.fee_receiver),
      badDebtUsd: decodeFromFields(Decimal.reified(), fields.bad_debt_usd),
      badDebtLimitUsd: decodeFromFields(Decimal.reified(), fields.bad_debt_limit_usd),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): LendingMarket<ToPhantomTypeArgument<T0>> {
    if (!isLendingMarket(item.type)) {
      throw new Error("not a LendingMarket type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return LendingMarket.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      version: decodeFromFieldsWithTypes("u64", item.fields.version),
      reserves: decodeFromFieldsWithTypes(
        reified.vector(Reserve.reified(typeArg)),
        item.fields.reserves,
      ),
      obligations: decodeFromFieldsWithTypes(
        ObjectTable.reified(
          reified.phantom(ID.reified()),
          reified.phantom(Obligation.reified(typeArg)),
        ),
        item.fields.obligations,
      ),
      rateLimiter: decodeFromFieldsWithTypes(RateLimiter.reified(), item.fields.rate_limiter),
      feeReceiver: decodeFromFieldsWithTypes("address", item.fields.fee_receiver),
      badDebtUsd: decodeFromFieldsWithTypes(Decimal.reified(), item.fields.bad_debt_usd),
      badDebtLimitUsd: decodeFromFieldsWithTypes(Decimal.reified(), item.fields.bad_debt_limit_usd),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): LendingMarket<ToPhantomTypeArgument<T0>> {
    return LendingMarket.fromFields(typeArg, LendingMarket.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      version: this.version.toString(),
      reserves: fieldToJSON<Vector<Reserve<T0>>>(
        `vector<${Reserve.$typeName}<${this.$typeArgs?.[0]}>>`,
        this.reserves,
      ),
      obligations: this.obligations.toJSONField(),
      rateLimiter: this.rateLimiter.toJSONField(),
      feeReceiver: this.feeReceiver,
      badDebtUsd: this.badDebtUsd.toJSONField(),
      badDebtLimitUsd: this.badDebtLimitUsd.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): LendingMarket<ToPhantomTypeArgument<T0>> {
    return LendingMarket.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      version: decodeFromJSONField("u64", field.version),
      reserves: decodeFromJSONField(reified.vector(Reserve.reified(typeArg)), field.reserves),
      obligations: decodeFromJSONField(
        ObjectTable.reified(
          reified.phantom(ID.reified()),
          reified.phantom(Obligation.reified(typeArg)),
        ),
        field.obligations,
      ),
      rateLimiter: decodeFromJSONField(RateLimiter.reified(), field.rateLimiter),
      feeReceiver: decodeFromJSONField("address", field.feeReceiver),
      badDebtUsd: decodeFromJSONField(Decimal.reified(), field.badDebtUsd),
      badDebtLimitUsd: decodeFromJSONField(Decimal.reified(), field.badDebtLimitUsd),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): LendingMarket<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== LendingMarket.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(LendingMarket.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return LendingMarket.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): LendingMarket<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isLendingMarket(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a LendingMarket object`);
    }
    return LendingMarket.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): LendingMarket<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isLendingMarket(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a LendingMarket object`);
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

      return LendingMarket.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return LendingMarket.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<LendingMarket<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching LendingMarket object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isLendingMarket(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a LendingMarket object`);
    }

    return LendingMarket.fromSuiObjectData(typeArg, res.data);
  }
}
