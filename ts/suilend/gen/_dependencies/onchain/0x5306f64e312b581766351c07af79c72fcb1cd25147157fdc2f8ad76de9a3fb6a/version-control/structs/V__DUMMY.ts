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

export function isV__DUMMY(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::version_control::V__DUMMY`;
}

export interface V__DUMMYFields {
  dummyField: ToField<"bool">;
}

export type V__DUMMYReified = Reified<V__DUMMY, V__DUMMYFields>;

/**
 * Move struct: `V__DUMMY`
 * Module: `5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a::version_control`
 */
export class V__DUMMY implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::version_control::V__DUMMY`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = V__DUMMY.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::version_control::V__DUMMY`;
  readonly $typeArgs: [];
  readonly $isPhantom = V__DUMMY.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: V__DUMMYFields) {
    this.$fullTypeName = composeSuiType(
      V__DUMMY.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::version_control::V__DUMMY`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): V__DUMMYReified {
    return {
      typeName: V__DUMMY.$typeName,
      fullTypeName: composeSuiType(
        V__DUMMY.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::version_control::V__DUMMY`,
      typeArgs: [] as [],
      isPhantom: V__DUMMY.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => V__DUMMY.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => V__DUMMY.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => V__DUMMY.fromBcs(data),
      bcs: V__DUMMY.bcs,
      fromJSONField: (field: any) => V__DUMMY.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => V__DUMMY.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => V__DUMMY.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => V__DUMMY.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => V__DUMMY.fetch(client, id),
      new: (fields: V__DUMMYFields) => {
        return new V__DUMMY([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return V__DUMMY.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<V__DUMMY>> {
    return phantom(V__DUMMY.reified());
  }
  static get p() {
    return V__DUMMY.phantom();
  }

  static get bcs() {
    return bcs.struct("V__DUMMY", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): V__DUMMY {
    return V__DUMMY.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): V__DUMMY {
    if (!isV__DUMMY(item.type)) {
      throw new Error("not a V__DUMMY type");
    }

    return V__DUMMY.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): V__DUMMY {
    return V__DUMMY.fromFields(V__DUMMY.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): V__DUMMY {
    return V__DUMMY.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
  }

  static fromJSON(json: Record<string, any>): V__DUMMY {
    if (json.$typeName !== V__DUMMY.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return V__DUMMY.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): V__DUMMY {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isV__DUMMY(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a V__DUMMY object`);
    }
    return V__DUMMY.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): V__DUMMY {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isV__DUMMY(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a V__DUMMY object`);
      }

      return V__DUMMY.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return V__DUMMY.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<V__DUMMY> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching V__DUMMY object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isV__DUMMY(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a V__DUMMY object`);
    }

    return V__DUMMY.fromSuiObjectData(res.data);
  }
}
