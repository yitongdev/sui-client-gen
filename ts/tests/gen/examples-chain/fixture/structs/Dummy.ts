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

export function isDummy(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::fixture::Dummy`;
}

export interface DummyFields {
  dummyField: ToField<"bool">;
}

export type DummyReified = Reified<Dummy, DummyFields>;

/**
 * Move struct: `Dummy`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 */
export class Dummy implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::fixture::Dummy`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Dummy.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::fixture::Dummy`;
  readonly $typeArgs: [];
  readonly $isPhantom = Dummy.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: DummyFields) {
    this.$fullTypeName = composeSuiType(
      Dummy.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::fixture::Dummy`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): DummyReified {
    return {
      typeName: Dummy.$typeName,
      fullTypeName: composeSuiType(Dummy.$typeName, ...[]) as `${typeof PKG_V1}::fixture::Dummy`,
      typeArgs: [] as [],
      isPhantom: Dummy.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Dummy.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Dummy.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Dummy.fromBcs(data),
      bcs: Dummy.bcs,
      fromJSONField: (field: any) => Dummy.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Dummy.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => Dummy.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => Dummy.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Dummy.fetch(client, id),
      new: (fields: DummyFields) => {
        return new Dummy([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Dummy.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Dummy>> {
    return phantom(Dummy.reified());
  }
  static get p() {
    return Dummy.phantom();
  }

  static get bcs() {
    return bcs.struct("Dummy", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): Dummy {
    return Dummy.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Dummy {
    if (!isDummy(item.type)) {
      throw new Error("not a Dummy type");
    }

    return Dummy.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): Dummy {
    return Dummy.fromFields(Dummy.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): Dummy {
    return Dummy.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
  }

  static fromJSON(json: Record<string, any>): Dummy {
    if (json.$typeName !== Dummy.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Dummy.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Dummy {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isDummy(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Dummy object`);
    }
    return Dummy.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Dummy {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isDummy(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Dummy object`);
      }

      return Dummy.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Dummy.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Dummy> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Dummy object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isDummy(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Dummy object`);
    }

    return Dummy.fromSuiObjectData(res.data);
  }
}
