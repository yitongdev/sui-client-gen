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

export function isLENDING_MARKET(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::lending_market::LENDING_MARKET`;
}

export interface LENDING_MARKETFields {
  dummyField: ToField<"bool">;
}

export type LENDING_MARKETReified = Reified<LENDING_MARKET, LENDING_MARKETFields>;

/**
 * Move struct: `LENDING_MARKET`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 */
export class LENDING_MARKET implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::lending_market::LENDING_MARKET`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = LENDING_MARKET.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::lending_market::LENDING_MARKET`;
  readonly $typeArgs: [];
  readonly $isPhantom = LENDING_MARKET.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: LENDING_MARKETFields) {
    this.$fullTypeName = composeSuiType(
      LENDING_MARKET.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::lending_market::LENDING_MARKET`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): LENDING_MARKETReified {
    return {
      typeName: LENDING_MARKET.$typeName,
      fullTypeName: composeSuiType(
        LENDING_MARKET.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::lending_market::LENDING_MARKET`,
      typeArgs: [] as [],
      isPhantom: LENDING_MARKET.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => LENDING_MARKET.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => LENDING_MARKET.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => LENDING_MARKET.fromBcs(data),
      bcs: LENDING_MARKET.bcs,
      fromJSONField: (field: any) => LENDING_MARKET.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => LENDING_MARKET.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => LENDING_MARKET.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => LENDING_MARKET.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => LENDING_MARKET.fetch(client, id),
      new: (fields: LENDING_MARKETFields) => {
        return new LENDING_MARKET([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return LENDING_MARKET.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<LENDING_MARKET>> {
    return phantom(LENDING_MARKET.reified());
  }
  static get p() {
    return LENDING_MARKET.phantom();
  }

  static get bcs() {
    return bcs.struct("LENDING_MARKET", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): LENDING_MARKET {
    return LENDING_MARKET.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): LENDING_MARKET {
    if (!isLENDING_MARKET(item.type)) {
      throw new Error("not a LENDING_MARKET type");
    }

    return LENDING_MARKET.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): LENDING_MARKET {
    return LENDING_MARKET.fromFields(LENDING_MARKET.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): LENDING_MARKET {
    return LENDING_MARKET.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): LENDING_MARKET {
    if (json.$typeName !== LENDING_MARKET.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return LENDING_MARKET.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): LENDING_MARKET {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isLENDING_MARKET(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a LENDING_MARKET object`);
    }
    return LENDING_MARKET.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): LENDING_MARKET {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isLENDING_MARKET(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a LENDING_MARKET object`);
      }

      return LENDING_MARKET.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return LENDING_MARKET.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<LENDING_MARKET> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching LENDING_MARKET object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isLENDING_MARKET(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a LENDING_MARKET object`);
    }

    return LENDING_MARKET.fromSuiObjectData(res.data);
  }
}
