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
import { UID } from "../../../0x2/object/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { PriceInfo as PriceInfo1 } from "./PriceInfo.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPriceInfoObject(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::price_info::PriceInfoObject`;
}

export interface PriceInfoObjectFields {
  id: ToField<UID>;
  priceInfo: ToField<PriceInfo1>;
}

export type PriceInfoObjectReified = Reified<
  PriceInfoObject,
  PriceInfoObjectFields
>;

/**
 * Move struct: `PriceInfoObject`
 * Module: `8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::price_info`
 */
export class PriceInfoObject implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::price_info::PriceInfoObject`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = PriceInfoObject.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::price_info::PriceInfoObject`;
  readonly $typeArgs: [];
  readonly $isPhantom = PriceInfoObject.$isPhantom;

  readonly id: ToField<UID>;
  readonly priceInfo: ToField<PriceInfo1>;

  private constructor(typeArgs: [], fields: PriceInfoObjectFields) {
    this.$fullTypeName = composeSuiType(
      PriceInfoObject.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::price_info::PriceInfoObject`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.priceInfo = fields.priceInfo;
  }

  static reified(): PriceInfoObjectReified {
    return {
      typeName: PriceInfoObject.$typeName,
      fullTypeName: composeSuiType(
        PriceInfoObject.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::price_info::PriceInfoObject`,
      typeArgs: [] as [],
      isPhantom: PriceInfoObject.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        PriceInfoObject.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        PriceInfoObject.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PriceInfoObject.fromBcs(data),
      bcs: PriceInfoObject.bcs,
      fromJSONField: (field: any) => PriceInfoObject.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => PriceInfoObject.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        PriceInfoObject.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        PriceInfoObject.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        PriceInfoObject.fetch(client, id),
      new: (fields: PriceInfoObjectFields) => {
        return new PriceInfoObject([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PriceInfoObject.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<PriceInfoObject>> {
    return phantom(PriceInfoObject.reified());
  }
  static get p() {
    return PriceInfoObject.phantom();
  }

  static get bcs() {
    return bcs.struct("PriceInfoObject", {
      id: UID.bcs,
      price_info: PriceInfo1.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): PriceInfoObject {
    return PriceInfoObject.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      priceInfo: decodeFromFields(PriceInfo1.reified(), fields.price_info),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PriceInfoObject {
    if (!isPriceInfoObject(item.type)) {
      throw new Error("not a PriceInfoObject type");
    }

    return PriceInfoObject.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      priceInfo: decodeFromFieldsWithTypes(
        PriceInfo1.reified(),
        item.fields.price_info,
      ),
    });
  }

  static fromBcs(data: Uint8Array): PriceInfoObject {
    return PriceInfoObject.fromFields(PriceInfoObject.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      priceInfo: this.priceInfo.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): PriceInfoObject {
    return PriceInfoObject.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      priceInfo: decodeFromJSONField(PriceInfo1.reified(), field.priceInfo),
    });
  }

  static fromJSON(json: Record<string, any>): PriceInfoObject {
    if (json.$typeName !== PriceInfoObject.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return PriceInfoObject.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): PriceInfoObject {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPriceInfoObject(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a PriceInfoObject object`,
      );
    }
    return PriceInfoObject.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): PriceInfoObject {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isPriceInfoObject(data.bcs.type)
      ) {
        throw new Error(`object at is not a PriceInfoObject object`);
      }

      return PriceInfoObject.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PriceInfoObject.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<PriceInfoObject> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching PriceInfoObject object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isPriceInfoObject(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a PriceInfoObject object`);
    }

    return PriceInfoObject.fromSuiObjectData(res.data);
  }
}
