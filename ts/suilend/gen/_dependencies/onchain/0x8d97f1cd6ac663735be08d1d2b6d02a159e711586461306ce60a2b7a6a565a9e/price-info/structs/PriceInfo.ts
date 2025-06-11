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
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { PriceFeed } from "../../price-feed/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPriceInfo(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::price_info::PriceInfo`;
}

export interface PriceInfoFields {
  attestationTime: ToField<"u64">;
  arrivalTime: ToField<"u64">;
  priceFeed: ToField<PriceFeed>;
}

export type PriceInfoReified = Reified<PriceInfo, PriceInfoFields>;

/**
 * Move struct: `PriceInfo`
 * Module: `8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::price_info`
 */
export class PriceInfo implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::price_info::PriceInfo`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = PriceInfo.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::price_info::PriceInfo`;
  readonly $typeArgs: [];
  readonly $isPhantom = PriceInfo.$isPhantom;

  readonly attestationTime: ToField<"u64">;
  readonly arrivalTime: ToField<"u64">;
  readonly priceFeed: ToField<PriceFeed>;

  private constructor(typeArgs: [], fields: PriceInfoFields) {
    this.$fullTypeName = composeSuiType(
      PriceInfo.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::price_info::PriceInfo`;
    this.$typeArgs = typeArgs;

    this.attestationTime = fields.attestationTime;
    this.arrivalTime = fields.arrivalTime;
    this.priceFeed = fields.priceFeed;
  }

  static reified(): PriceInfoReified {
    return {
      typeName: PriceInfo.$typeName,
      fullTypeName: composeSuiType(
        PriceInfo.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::price_info::PriceInfo`,
      typeArgs: [] as [],
      isPhantom: PriceInfo.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => PriceInfo.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        PriceInfo.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PriceInfo.fromBcs(data),
      bcs: PriceInfo.bcs,
      fromJSONField: (field: any) => PriceInfo.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => PriceInfo.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        PriceInfo.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        PriceInfo.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        PriceInfo.fetch(client, id),
      new: (fields: PriceInfoFields) => {
        return new PriceInfo([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PriceInfo.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<PriceInfo>> {
    return phantom(PriceInfo.reified());
  }
  static get p() {
    return PriceInfo.phantom();
  }

  static get bcs() {
    return bcs.struct("PriceInfo", {
      attestation_time: bcs.u64(),
      arrival_time: bcs.u64(),
      price_feed: PriceFeed.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): PriceInfo {
    return PriceInfo.reified().new({
      attestationTime: decodeFromFields("u64", fields.attestation_time),
      arrivalTime: decodeFromFields("u64", fields.arrival_time),
      priceFeed: decodeFromFields(PriceFeed.reified(), fields.price_feed),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PriceInfo {
    if (!isPriceInfo(item.type)) {
      throw new Error("not a PriceInfo type");
    }

    return PriceInfo.reified().new({
      attestationTime: decodeFromFieldsWithTypes(
        "u64",
        item.fields.attestation_time,
      ),
      arrivalTime: decodeFromFieldsWithTypes("u64", item.fields.arrival_time),
      priceFeed: decodeFromFieldsWithTypes(
        PriceFeed.reified(),
        item.fields.price_feed,
      ),
    });
  }

  static fromBcs(data: Uint8Array): PriceInfo {
    return PriceInfo.fromFields(PriceInfo.bcs.parse(data));
  }

  toJSONField() {
    return {
      attestationTime: this.attestationTime.toString(),
      arrivalTime: this.arrivalTime.toString(),
      priceFeed: this.priceFeed.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): PriceInfo {
    return PriceInfo.reified().new({
      attestationTime: decodeFromJSONField("u64", field.attestationTime),
      arrivalTime: decodeFromJSONField("u64", field.arrivalTime),
      priceFeed: decodeFromJSONField(PriceFeed.reified(), field.priceFeed),
    });
  }

  static fromJSON(json: Record<string, any>): PriceInfo {
    if (json.$typeName !== PriceInfo.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return PriceInfo.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): PriceInfo {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPriceInfo(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a PriceInfo object`,
      );
    }
    return PriceInfo.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): PriceInfo {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isPriceInfo(data.bcs.type)) {
        throw new Error(`object at is not a PriceInfo object`);
      }

      return PriceInfo.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PriceInfo.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<PriceInfo> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching PriceInfo object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isPriceInfo(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a PriceInfo object`);
    }

    return PriceInfo.fromSuiObjectData(res.data);
  }
}
