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
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../_framework/util.js";
import { PKG_V8 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isClaimStakingRewardsEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V8}::reserve::ClaimStakingRewardsEvent`;
}

export interface ClaimStakingRewardsEventFields {
  lendingMarketId: ToField<"address">;
  coinType: ToField<TypeName>;
  reserveId: ToField<"address">;
  amount: ToField<"u64">;
}

export type ClaimStakingRewardsEventReified = Reified<
  ClaimStakingRewardsEvent,
  ClaimStakingRewardsEventFields
>;

/**
 * Move struct: `ClaimStakingRewardsEvent`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 */
export class ClaimStakingRewardsEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V8}::reserve::ClaimStakingRewardsEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ClaimStakingRewardsEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V8}::reserve::ClaimStakingRewardsEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = ClaimStakingRewardsEvent.$isPhantom;

  readonly lendingMarketId: ToField<"address">;
  readonly coinType: ToField<TypeName>;
  readonly reserveId: ToField<"address">;
  readonly amount: ToField<"u64">;

  private constructor(typeArgs: [], fields: ClaimStakingRewardsEventFields) {
    this.$fullTypeName = composeSuiType(
      ClaimStakingRewardsEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V8}::reserve::ClaimStakingRewardsEvent`;
    this.$typeArgs = typeArgs;

    this.lendingMarketId = fields.lendingMarketId;
    this.coinType = fields.coinType;
    this.reserveId = fields.reserveId;
    this.amount = fields.amount;
  }

  static reified(): ClaimStakingRewardsEventReified {
    return {
      typeName: ClaimStakingRewardsEvent.$typeName,
      fullTypeName: composeSuiType(
        ClaimStakingRewardsEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V8}::reserve::ClaimStakingRewardsEvent`,
      typeArgs: [] as [],
      isPhantom: ClaimStakingRewardsEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => ClaimStakingRewardsEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ClaimStakingRewardsEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ClaimStakingRewardsEvent.fromBcs(data),
      bcs: ClaimStakingRewardsEvent.bcs,
      fromJSONField: (field: any) => ClaimStakingRewardsEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ClaimStakingRewardsEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ClaimStakingRewardsEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ClaimStakingRewardsEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => ClaimStakingRewardsEvent.fetch(client, id),
      new: (fields: ClaimStakingRewardsEventFields) => {
        return new ClaimStakingRewardsEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ClaimStakingRewardsEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ClaimStakingRewardsEvent>> {
    return phantom(ClaimStakingRewardsEvent.reified());
  }
  static get p() {
    return ClaimStakingRewardsEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("ClaimStakingRewardsEvent", {
      lending_market_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      coin_type: TypeName.bcs,
      reserve_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): ClaimStakingRewardsEvent {
    return ClaimStakingRewardsEvent.reified().new({
      lendingMarketId: decodeFromFields("address", fields.lending_market_id),
      coinType: decodeFromFields(TypeName.reified(), fields.coin_type),
      reserveId: decodeFromFields("address", fields.reserve_id),
      amount: decodeFromFields("u64", fields.amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ClaimStakingRewardsEvent {
    if (!isClaimStakingRewardsEvent(item.type)) {
      throw new Error("not a ClaimStakingRewardsEvent type");
    }

    return ClaimStakingRewardsEvent.reified().new({
      lendingMarketId: decodeFromFieldsWithTypes("address", item.fields.lending_market_id),
      coinType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type),
      reserveId: decodeFromFieldsWithTypes("address", item.fields.reserve_id),
      amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
    });
  }

  static fromBcs(data: Uint8Array): ClaimStakingRewardsEvent {
    return ClaimStakingRewardsEvent.fromFields(ClaimStakingRewardsEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      lendingMarketId: this.lendingMarketId,
      coinType: this.coinType.toJSONField(),
      reserveId: this.reserveId,
      amount: this.amount.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): ClaimStakingRewardsEvent {
    return ClaimStakingRewardsEvent.reified().new({
      lendingMarketId: decodeFromJSONField("address", field.lendingMarketId),
      coinType: decodeFromJSONField(TypeName.reified(), field.coinType),
      reserveId: decodeFromJSONField("address", field.reserveId),
      amount: decodeFromJSONField("u64", field.amount),
    });
  }

  static fromJSON(json: Record<string, any>): ClaimStakingRewardsEvent {
    if (json.$typeName !== ClaimStakingRewardsEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ClaimStakingRewardsEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ClaimStakingRewardsEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isClaimStakingRewardsEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ClaimStakingRewardsEvent object`,
      );
    }
    return ClaimStakingRewardsEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ClaimStakingRewardsEvent {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isClaimStakingRewardsEvent(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a ClaimStakingRewardsEvent object`);
      }

      return ClaimStakingRewardsEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ClaimStakingRewardsEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<ClaimStakingRewardsEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching ClaimStakingRewardsEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isClaimStakingRewardsEvent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a ClaimStakingRewardsEvent object`);
    }

    return ClaimStakingRewardsEvent.fromSuiObjectData(res.data);
  }
}
