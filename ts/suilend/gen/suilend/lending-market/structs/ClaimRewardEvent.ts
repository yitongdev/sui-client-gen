import { TypeName } from "../../../_dependencies/onchain/0x1/type-name/structs/index.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isClaimRewardEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::lending_market::ClaimRewardEvent`;
}

export interface ClaimRewardEventFields {
  lendingMarketId: ToField<"address">;
  reserveId: ToField<"address">;
  obligationId: ToField<"address">;
  isDepositReward: ToField<"bool">;
  poolRewardId: ToField<"address">;
  coinType: ToField<TypeName>;
  liquidityAmount: ToField<"u64">;
}

export type ClaimRewardEventReified = Reified<
  ClaimRewardEvent,
  ClaimRewardEventFields
>;

/**
 * Move struct: `ClaimRewardEvent`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 */
export class ClaimRewardEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::lending_market::ClaimRewardEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ClaimRewardEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::lending_market::ClaimRewardEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = ClaimRewardEvent.$isPhantom;

  readonly lendingMarketId: ToField<"address">;
  readonly reserveId: ToField<"address">;
  readonly obligationId: ToField<"address">;
  readonly isDepositReward: ToField<"bool">;
  readonly poolRewardId: ToField<"address">;
  readonly coinType: ToField<TypeName>;
  readonly liquidityAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: ClaimRewardEventFields) {
    this.$fullTypeName = composeSuiType(
      ClaimRewardEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::lending_market::ClaimRewardEvent`;
    this.$typeArgs = typeArgs;

    this.lendingMarketId = fields.lendingMarketId;
    this.reserveId = fields.reserveId;
    this.obligationId = fields.obligationId;
    this.isDepositReward = fields.isDepositReward;
    this.poolRewardId = fields.poolRewardId;
    this.coinType = fields.coinType;
    this.liquidityAmount = fields.liquidityAmount;
  }

  static reified(): ClaimRewardEventReified {
    return {
      typeName: ClaimRewardEvent.$typeName,
      fullTypeName: composeSuiType(
        ClaimRewardEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::lending_market::ClaimRewardEvent`,
      typeArgs: [] as [],
      isPhantom: ClaimRewardEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        ClaimRewardEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ClaimRewardEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ClaimRewardEvent.fromBcs(data),
      bcs: ClaimRewardEvent.bcs,
      fromJSONField: (field: any) => ClaimRewardEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ClaimRewardEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ClaimRewardEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ClaimRewardEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        ClaimRewardEvent.fetch(client, id),
      new: (fields: ClaimRewardEventFields) => {
        return new ClaimRewardEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ClaimRewardEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ClaimRewardEvent>> {
    return phantom(ClaimRewardEvent.reified());
  }
  static get p() {
    return ClaimRewardEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("ClaimRewardEvent", {
      lending_market_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      reserve_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      obligation_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      is_deposit_reward: bcs.bool(),
      pool_reward_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      coin_type: TypeName.bcs,
      liquidity_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): ClaimRewardEvent {
    return ClaimRewardEvent.reified().new({
      lendingMarketId: decodeFromFields("address", fields.lending_market_id),
      reserveId: decodeFromFields("address", fields.reserve_id),
      obligationId: decodeFromFields("address", fields.obligation_id),
      isDepositReward: decodeFromFields("bool", fields.is_deposit_reward),
      poolRewardId: decodeFromFields("address", fields.pool_reward_id),
      coinType: decodeFromFields(TypeName.reified(), fields.coin_type),
      liquidityAmount: decodeFromFields("u64", fields.liquidity_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ClaimRewardEvent {
    if (!isClaimRewardEvent(item.type)) {
      throw new Error("not a ClaimRewardEvent type");
    }

    return ClaimRewardEvent.reified().new({
      lendingMarketId: decodeFromFieldsWithTypes(
        "address",
        item.fields.lending_market_id,
      ),
      reserveId: decodeFromFieldsWithTypes("address", item.fields.reserve_id),
      obligationId: decodeFromFieldsWithTypes(
        "address",
        item.fields.obligation_id,
      ),
      isDepositReward: decodeFromFieldsWithTypes(
        "bool",
        item.fields.is_deposit_reward,
      ),
      poolRewardId: decodeFromFieldsWithTypes(
        "address",
        item.fields.pool_reward_id,
      ),
      coinType: decodeFromFieldsWithTypes(
        TypeName.reified(),
        item.fields.coin_type,
      ),
      liquidityAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.liquidity_amount,
      ),
    });
  }

  static fromBcs(data: Uint8Array): ClaimRewardEvent {
    return ClaimRewardEvent.fromFields(ClaimRewardEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      lendingMarketId: this.lendingMarketId,
      reserveId: this.reserveId,
      obligationId: this.obligationId,
      isDepositReward: this.isDepositReward,
      poolRewardId: this.poolRewardId,
      coinType: this.coinType.toJSONField(),
      liquidityAmount: this.liquidityAmount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): ClaimRewardEvent {
    return ClaimRewardEvent.reified().new({
      lendingMarketId: decodeFromJSONField("address", field.lendingMarketId),
      reserveId: decodeFromJSONField("address", field.reserveId),
      obligationId: decodeFromJSONField("address", field.obligationId),
      isDepositReward: decodeFromJSONField("bool", field.isDepositReward),
      poolRewardId: decodeFromJSONField("address", field.poolRewardId),
      coinType: decodeFromJSONField(TypeName.reified(), field.coinType),
      liquidityAmount: decodeFromJSONField("u64", field.liquidityAmount),
    });
  }

  static fromJSON(json: Record<string, any>): ClaimRewardEvent {
    if (json.$typeName !== ClaimRewardEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ClaimRewardEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ClaimRewardEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isClaimRewardEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ClaimRewardEvent object`,
      );
    }
    return ClaimRewardEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ClaimRewardEvent {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isClaimRewardEvent(data.bcs.type)
      ) {
        throw new Error(`object at is not a ClaimRewardEvent object`);
      }

      return ClaimRewardEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ClaimRewardEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<ClaimRewardEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching ClaimRewardEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isClaimRewardEvent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a ClaimRewardEvent object`);
    }

    return ClaimRewardEvent.fromSuiObjectData(res.data);
  }
}
