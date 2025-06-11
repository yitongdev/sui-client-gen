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
import { fromBase64 } from "@mysten/sui/utils";

export function isWEIGHT(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::weight::WEIGHT`;
}

export interface WEIGHTFields {
  dummyField: ToField<"bool">;
}

export type WEIGHTReified = Reified<WEIGHT, WEIGHTFields>;

/**
 * Move struct: `WEIGHT`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::weight`
 */
export class WEIGHT implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::weight::WEIGHT`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = WEIGHT.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::weight::WEIGHT`;
  readonly $typeArgs: [];
  readonly $isPhantom = WEIGHT.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: WEIGHTFields) {
    this.$fullTypeName = composeSuiType(
      WEIGHT.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::weight::WEIGHT`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): WEIGHTReified {
    return {
      typeName: WEIGHT.$typeName,
      fullTypeName: composeSuiType(
        WEIGHT.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::weight::WEIGHT`,
      typeArgs: [] as [],
      isPhantom: WEIGHT.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => WEIGHT.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        WEIGHT.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => WEIGHT.fromBcs(data),
      bcs: WEIGHT.bcs,
      fromJSONField: (field: any) => WEIGHT.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => WEIGHT.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        WEIGHT.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        WEIGHT.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => WEIGHT.fetch(client, id),
      new: (fields: WEIGHTFields) => {
        return new WEIGHT([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return WEIGHT.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<WEIGHT>> {
    return phantom(WEIGHT.reified());
  }
  static get p() {
    return WEIGHT.phantom();
  }

  static get bcs() {
    return bcs.struct("WEIGHT", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): WEIGHT {
    return WEIGHT.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): WEIGHT {
    if (!isWEIGHT(item.type)) {
      throw new Error("not a WEIGHT type");
    }

    return WEIGHT.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): WEIGHT {
    return WEIGHT.fromFields(WEIGHT.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): WEIGHT {
    return WEIGHT.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): WEIGHT {
    if (json.$typeName !== WEIGHT.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return WEIGHT.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): WEIGHT {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isWEIGHT(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a WEIGHT object`,
      );
    }
    return WEIGHT.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): WEIGHT {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isWEIGHT(data.bcs.type)) {
        throw new Error(`object at is not a WEIGHT object`);
      }

      return WEIGHT.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return WEIGHT.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<WEIGHT> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching WEIGHT object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isWEIGHT(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a WEIGHT object`);
    }

    return WEIGHT.fromSuiObjectData(res.data);
  }
}
