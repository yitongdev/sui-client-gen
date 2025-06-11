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
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isStalePriceThreshold(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::set_stale_price_threshold::StalePriceThreshold`;
}

export interface StalePriceThresholdFields {
  threshold: ToField<"u64">;
}

export type StalePriceThresholdReified = Reified<
  StalePriceThreshold,
  StalePriceThresholdFields
>;

/**
 * Move struct: `StalePriceThreshold`
 * Module: `8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::set_stale_price_threshold`
 */
export class StalePriceThreshold implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::set_stale_price_threshold::StalePriceThreshold`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = StalePriceThreshold.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::set_stale_price_threshold::StalePriceThreshold`;
  readonly $typeArgs: [];
  readonly $isPhantom = StalePriceThreshold.$isPhantom;

  readonly threshold: ToField<"u64">;

  private constructor(typeArgs: [], fields: StalePriceThresholdFields) {
    this.$fullTypeName = composeSuiType(
      StalePriceThreshold.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::set_stale_price_threshold::StalePriceThreshold`;
    this.$typeArgs = typeArgs;

    this.threshold = fields.threshold;
  }

  static reified(): StalePriceThresholdReified {
    return {
      typeName: StalePriceThreshold.$typeName,
      fullTypeName: composeSuiType(
        StalePriceThreshold.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::set_stale_price_threshold::StalePriceThreshold`,
      typeArgs: [] as [],
      isPhantom: StalePriceThreshold.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        StalePriceThreshold.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        StalePriceThreshold.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => StalePriceThreshold.fromBcs(data),
      bcs: StalePriceThreshold.bcs,
      fromJSONField: (field: any) => StalePriceThreshold.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        StalePriceThreshold.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        StalePriceThreshold.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        StalePriceThreshold.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        StalePriceThreshold.fetch(client, id),
      new: (fields: StalePriceThresholdFields) => {
        return new StalePriceThreshold([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return StalePriceThreshold.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<StalePriceThreshold>> {
    return phantom(StalePriceThreshold.reified());
  }
  static get p() {
    return StalePriceThreshold.phantom();
  }

  static get bcs() {
    return bcs.struct("StalePriceThreshold", {
      threshold: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): StalePriceThreshold {
    return StalePriceThreshold.reified().new({
      threshold: decodeFromFields("u64", fields.threshold),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): StalePriceThreshold {
    if (!isStalePriceThreshold(item.type)) {
      throw new Error("not a StalePriceThreshold type");
    }

    return StalePriceThreshold.reified().new({
      threshold: decodeFromFieldsWithTypes("u64", item.fields.threshold),
    });
  }

  static fromBcs(data: Uint8Array): StalePriceThreshold {
    return StalePriceThreshold.fromFields(StalePriceThreshold.bcs.parse(data));
  }

  toJSONField() {
    return {
      threshold: this.threshold.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): StalePriceThreshold {
    return StalePriceThreshold.reified().new({
      threshold: decodeFromJSONField("u64", field.threshold),
    });
  }

  static fromJSON(json: Record<string, any>): StalePriceThreshold {
    if (json.$typeName !== StalePriceThreshold.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return StalePriceThreshold.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): StalePriceThreshold {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isStalePriceThreshold(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a StalePriceThreshold object`,
      );
    }
    return StalePriceThreshold.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): StalePriceThreshold {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isStalePriceThreshold(data.bcs.type)
      ) {
        throw new Error(`object at is not a StalePriceThreshold object`);
      }

      return StalePriceThreshold.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return StalePriceThreshold.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<StalePriceThreshold> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching StalePriceThreshold object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isStalePriceThreshold(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a StalePriceThreshold object`);
    }

    return StalePriceThreshold.fromSuiObjectData(res.data);
  }
}
