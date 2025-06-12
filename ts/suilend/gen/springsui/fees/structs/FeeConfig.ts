import { Bag } from "../../../_dependencies/onchain/0x2/bag/structs/index.js";
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
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isFeeConfig(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::fees::FeeConfig`;
}

export interface FeeConfigFields {
  suiMintFeeBps: ToField<"u64">;
  stakedSuiMintFeeBps: ToField<"u64">;
  redeemFeeBps: ToField<"u64">;
  stakedSuiRedeemFeeBps: ToField<"u64">;
  spreadFeeBps: ToField<"u64">;
  customRedeemFeeBps: ToField<"u64">;
  extraFields: ToField<Bag>;
}

export type FeeConfigReified = Reified<FeeConfig, FeeConfigFields>;

/**
 * Move struct: `FeeConfig`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::fees`
 */
export class FeeConfig implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::fees::FeeConfig`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = FeeConfig.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::fees::FeeConfig`;
  readonly $typeArgs: [];
  readonly $isPhantom = FeeConfig.$isPhantom;

  readonly suiMintFeeBps: ToField<"u64">;
  readonly stakedSuiMintFeeBps: ToField<"u64">;
  readonly redeemFeeBps: ToField<"u64">;
  readonly stakedSuiRedeemFeeBps: ToField<"u64">;
  readonly spreadFeeBps: ToField<"u64">;
  readonly customRedeemFeeBps: ToField<"u64">;
  readonly extraFields: ToField<Bag>;

  private constructor(typeArgs: [], fields: FeeConfigFields) {
    this.$fullTypeName = composeSuiType(
      FeeConfig.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::fees::FeeConfig`;
    this.$typeArgs = typeArgs;

    this.suiMintFeeBps = fields.suiMintFeeBps;
    this.stakedSuiMintFeeBps = fields.stakedSuiMintFeeBps;
    this.redeemFeeBps = fields.redeemFeeBps;
    this.stakedSuiRedeemFeeBps = fields.stakedSuiRedeemFeeBps;
    this.spreadFeeBps = fields.spreadFeeBps;
    this.customRedeemFeeBps = fields.customRedeemFeeBps;
    this.extraFields = fields.extraFields;
  }

  static reified(): FeeConfigReified {
    return {
      typeName: FeeConfig.$typeName,
      fullTypeName: composeSuiType(
        FeeConfig.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::fees::FeeConfig`,
      typeArgs: [] as [],
      isPhantom: FeeConfig.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => FeeConfig.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => FeeConfig.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => FeeConfig.fromBcs(data),
      bcs: FeeConfig.bcs,
      fromJSONField: (field: any) => FeeConfig.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => FeeConfig.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => FeeConfig.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => FeeConfig.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => FeeConfig.fetch(client, id),
      new: (fields: FeeConfigFields) => {
        return new FeeConfig([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return FeeConfig.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<FeeConfig>> {
    return phantom(FeeConfig.reified());
  }
  static get p() {
    return FeeConfig.phantom();
  }

  static get bcs() {
    return bcs.struct("FeeConfig", {
      sui_mint_fee_bps: bcs.u64(),
      staked_sui_mint_fee_bps: bcs.u64(),
      redeem_fee_bps: bcs.u64(),
      staked_sui_redeem_fee_bps: bcs.u64(),
      spread_fee_bps: bcs.u64(),
      custom_redeem_fee_bps: bcs.u64(),
      extra_fields: Bag.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): FeeConfig {
    return FeeConfig.reified().new({
      suiMintFeeBps: decodeFromFields("u64", fields.sui_mint_fee_bps),
      stakedSuiMintFeeBps: decodeFromFields("u64", fields.staked_sui_mint_fee_bps),
      redeemFeeBps: decodeFromFields("u64", fields.redeem_fee_bps),
      stakedSuiRedeemFeeBps: decodeFromFields("u64", fields.staked_sui_redeem_fee_bps),
      spreadFeeBps: decodeFromFields("u64", fields.spread_fee_bps),
      customRedeemFeeBps: decodeFromFields("u64", fields.custom_redeem_fee_bps),
      extraFields: decodeFromFields(Bag.reified(), fields.extra_fields),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): FeeConfig {
    if (!isFeeConfig(item.type)) {
      throw new Error("not a FeeConfig type");
    }

    return FeeConfig.reified().new({
      suiMintFeeBps: decodeFromFieldsWithTypes("u64", item.fields.sui_mint_fee_bps),
      stakedSuiMintFeeBps: decodeFromFieldsWithTypes("u64", item.fields.staked_sui_mint_fee_bps),
      redeemFeeBps: decodeFromFieldsWithTypes("u64", item.fields.redeem_fee_bps),
      stakedSuiRedeemFeeBps: decodeFromFieldsWithTypes(
        "u64",
        item.fields.staked_sui_redeem_fee_bps,
      ),
      spreadFeeBps: decodeFromFieldsWithTypes("u64", item.fields.spread_fee_bps),
      customRedeemFeeBps: decodeFromFieldsWithTypes("u64", item.fields.custom_redeem_fee_bps),
      extraFields: decodeFromFieldsWithTypes(Bag.reified(), item.fields.extra_fields),
    });
  }

  static fromBcs(data: Uint8Array): FeeConfig {
    return FeeConfig.fromFields(FeeConfig.bcs.parse(data));
  }

  toJSONField() {
    return {
      suiMintFeeBps: this.suiMintFeeBps.toString(),
      stakedSuiMintFeeBps: this.stakedSuiMintFeeBps.toString(),
      redeemFeeBps: this.redeemFeeBps.toString(),
      stakedSuiRedeemFeeBps: this.stakedSuiRedeemFeeBps.toString(),
      spreadFeeBps: this.spreadFeeBps.toString(),
      customRedeemFeeBps: this.customRedeemFeeBps.toString(),
      extraFields: this.extraFields.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): FeeConfig {
    return FeeConfig.reified().new({
      suiMintFeeBps: decodeFromJSONField("u64", field.suiMintFeeBps),
      stakedSuiMintFeeBps: decodeFromJSONField("u64", field.stakedSuiMintFeeBps),
      redeemFeeBps: decodeFromJSONField("u64", field.redeemFeeBps),
      stakedSuiRedeemFeeBps: decodeFromJSONField("u64", field.stakedSuiRedeemFeeBps),
      spreadFeeBps: decodeFromJSONField("u64", field.spreadFeeBps),
      customRedeemFeeBps: decodeFromJSONField("u64", field.customRedeemFeeBps),
      extraFields: decodeFromJSONField(Bag.reified(), field.extraFields),
    });
  }

  static fromJSON(json: Record<string, any>): FeeConfig {
    if (json.$typeName !== FeeConfig.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return FeeConfig.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): FeeConfig {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isFeeConfig(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a FeeConfig object`);
    }
    return FeeConfig.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): FeeConfig {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isFeeConfig(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a FeeConfig object`);
      }

      return FeeConfig.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return FeeConfig.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<FeeConfig> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching FeeConfig object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isFeeConfig(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a FeeConfig object`);
    }

    return FeeConfig.fromSuiObjectData(res.data);
  }
}
