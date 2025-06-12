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

export function isExampleStruct(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::examples::ExampleStruct`;
}

export interface ExampleStructFields {
  dummyField: ToField<"bool">;
}

export type ExampleStructReified = Reified<ExampleStruct, ExampleStructFields>;

/**
 * Move struct: `ExampleStruct`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::examples`
 */
export class ExampleStruct implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::examples::ExampleStruct`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ExampleStruct.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::examples::ExampleStruct`;
  readonly $typeArgs: [];
  readonly $isPhantom = ExampleStruct.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: ExampleStructFields) {
    this.$fullTypeName = composeSuiType(
      ExampleStruct.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::examples::ExampleStruct`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): ExampleStructReified {
    return {
      typeName: ExampleStruct.$typeName,
      fullTypeName: composeSuiType(
        ExampleStruct.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::examples::ExampleStruct`,
      typeArgs: [] as [],
      isPhantom: ExampleStruct.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => ExampleStruct.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => ExampleStruct.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ExampleStruct.fromBcs(data),
      bcs: ExampleStruct.bcs,
      fromJSONField: (field: any) => ExampleStruct.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ExampleStruct.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => ExampleStruct.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => ExampleStruct.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => ExampleStruct.fetch(client, id),
      new: (fields: ExampleStructFields) => {
        return new ExampleStruct([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ExampleStruct.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ExampleStruct>> {
    return phantom(ExampleStruct.reified());
  }
  static get p() {
    return ExampleStruct.phantom();
  }

  static get bcs() {
    return bcs.struct("ExampleStruct", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): ExampleStruct {
    return ExampleStruct.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ExampleStruct {
    if (!isExampleStruct(item.type)) {
      throw new Error("not a ExampleStruct type");
    }

    return ExampleStruct.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): ExampleStruct {
    return ExampleStruct.fromFields(ExampleStruct.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): ExampleStruct {
    return ExampleStruct.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): ExampleStruct {
    if (json.$typeName !== ExampleStruct.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ExampleStruct.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ExampleStruct {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isExampleStruct(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a ExampleStruct object`);
    }
    return ExampleStruct.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ExampleStruct {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isExampleStruct(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a ExampleStruct object`);
      }

      return ExampleStruct.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ExampleStruct.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<ExampleStruct> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching ExampleStruct object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isExampleStruct(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a ExampleStruct object`);
    }

    return ExampleStruct.fromSuiObjectData(res.data);
  }
}
