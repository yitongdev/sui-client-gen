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

export function isLENDING_MARKET_2(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::lending_market_registry::LENDING_MARKET_2`;
}

export interface LENDING_MARKET_2Fields {
  dummyField: ToField<"bool">;
}

export type LENDING_MARKET_2Reified = Reified<
  LENDING_MARKET_2,
  LENDING_MARKET_2Fields
>;

/**
 * Move struct: `LENDING_MARKET_2`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market_registry`
 */
export class LENDING_MARKET_2 implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::lending_market_registry::LENDING_MARKET_2`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = LENDING_MARKET_2.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::lending_market_registry::LENDING_MARKET_2`;
  readonly $typeArgs: [];
  readonly $isPhantom = LENDING_MARKET_2.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: LENDING_MARKET_2Fields) {
    this.$fullTypeName = composeSuiType(
      LENDING_MARKET_2.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::lending_market_registry::LENDING_MARKET_2`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): LENDING_MARKET_2Reified {
    return {
      typeName: LENDING_MARKET_2.$typeName,
      fullTypeName: composeSuiType(
        LENDING_MARKET_2.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::lending_market_registry::LENDING_MARKET_2`,
      typeArgs: [] as [],
      isPhantom: LENDING_MARKET_2.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        LENDING_MARKET_2.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        LENDING_MARKET_2.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => LENDING_MARKET_2.fromBcs(data),
      bcs: LENDING_MARKET_2.bcs,
      fromJSONField: (field: any) => LENDING_MARKET_2.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => LENDING_MARKET_2.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        LENDING_MARKET_2.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        LENDING_MARKET_2.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        LENDING_MARKET_2.fetch(client, id),
      new: (fields: LENDING_MARKET_2Fields) => {
        return new LENDING_MARKET_2([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return LENDING_MARKET_2.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<LENDING_MARKET_2>> {
    return phantom(LENDING_MARKET_2.reified());
  }
  static get p() {
    return LENDING_MARKET_2.phantom();
  }

  static get bcs() {
    return bcs.struct("LENDING_MARKET_2", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): LENDING_MARKET_2 {
    return LENDING_MARKET_2.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): LENDING_MARKET_2 {
    if (!isLENDING_MARKET_2(item.type)) {
      throw new Error("not a LENDING_MARKET_2 type");
    }

    return LENDING_MARKET_2.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): LENDING_MARKET_2 {
    return LENDING_MARKET_2.fromFields(LENDING_MARKET_2.bcs.parse(data));
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

  static fromJSONField(field: any): LENDING_MARKET_2 {
    return LENDING_MARKET_2.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): LENDING_MARKET_2 {
    if (json.$typeName !== LENDING_MARKET_2.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return LENDING_MARKET_2.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): LENDING_MARKET_2 {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isLENDING_MARKET_2(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a LENDING_MARKET_2 object`,
      );
    }
    return LENDING_MARKET_2.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): LENDING_MARKET_2 {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isLENDING_MARKET_2(data.bcs.type)
      ) {
        throw new Error(`object at is not a LENDING_MARKET_2 object`);
      }

      return LENDING_MARKET_2.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return LENDING_MARKET_2.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<LENDING_MARKET_2> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching LENDING_MARKET_2 object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isLENDING_MARKET_2(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a LENDING_MARKET_2 object`);
    }

    return LENDING_MARKET_2.fromSuiObjectData(res.data);
  }
}
