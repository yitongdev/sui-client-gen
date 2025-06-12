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

export function isEXAMPLE_COIN(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::example_coin::EXAMPLE_COIN`;
}

export interface EXAMPLE_COINFields {
  dummyField: ToField<"bool">;
}

export type EXAMPLE_COINReified = Reified<EXAMPLE_COIN, EXAMPLE_COINFields>;

/**
 * Move struct: `EXAMPLE_COIN`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::example_coin`
 */
export class EXAMPLE_COIN implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::example_coin::EXAMPLE_COIN`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = EXAMPLE_COIN.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::example_coin::EXAMPLE_COIN`;
  readonly $typeArgs: [];
  readonly $isPhantom = EXAMPLE_COIN.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: EXAMPLE_COINFields) {
    this.$fullTypeName = composeSuiType(
      EXAMPLE_COIN.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::example_coin::EXAMPLE_COIN`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): EXAMPLE_COINReified {
    return {
      typeName: EXAMPLE_COIN.$typeName,
      fullTypeName: composeSuiType(
        EXAMPLE_COIN.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::example_coin::EXAMPLE_COIN`,
      typeArgs: [] as [],
      isPhantom: EXAMPLE_COIN.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => EXAMPLE_COIN.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => EXAMPLE_COIN.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => EXAMPLE_COIN.fromBcs(data),
      bcs: EXAMPLE_COIN.bcs,
      fromJSONField: (field: any) => EXAMPLE_COIN.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => EXAMPLE_COIN.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => EXAMPLE_COIN.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => EXAMPLE_COIN.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => EXAMPLE_COIN.fetch(client, id),
      new: (fields: EXAMPLE_COINFields) => {
        return new EXAMPLE_COIN([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return EXAMPLE_COIN.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<EXAMPLE_COIN>> {
    return phantom(EXAMPLE_COIN.reified());
  }
  static get p() {
    return EXAMPLE_COIN.phantom();
  }

  static get bcs() {
    return bcs.struct("EXAMPLE_COIN", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): EXAMPLE_COIN {
    return EXAMPLE_COIN.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): EXAMPLE_COIN {
    if (!isEXAMPLE_COIN(item.type)) {
      throw new Error("not a EXAMPLE_COIN type");
    }

    return EXAMPLE_COIN.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): EXAMPLE_COIN {
    return EXAMPLE_COIN.fromFields(EXAMPLE_COIN.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): EXAMPLE_COIN {
    return EXAMPLE_COIN.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): EXAMPLE_COIN {
    if (json.$typeName !== EXAMPLE_COIN.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return EXAMPLE_COIN.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): EXAMPLE_COIN {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isEXAMPLE_COIN(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a EXAMPLE_COIN object`);
    }
    return EXAMPLE_COIN.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): EXAMPLE_COIN {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isEXAMPLE_COIN(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a EXAMPLE_COIN object`);
      }

      return EXAMPLE_COIN.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return EXAMPLE_COIN.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<EXAMPLE_COIN> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching EXAMPLE_COIN object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isEXAMPLE_COIN(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a EXAMPLE_COIN object`);
    }

    return EXAMPLE_COIN.fromSuiObjectData(res.data);
  }
}
