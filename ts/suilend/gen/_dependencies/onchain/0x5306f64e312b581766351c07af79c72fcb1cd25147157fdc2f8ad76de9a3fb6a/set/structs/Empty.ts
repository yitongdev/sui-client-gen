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

export function isEmpty(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::set::Empty`;
}

export interface EmptyFields {
  dummyField: ToField<"bool">;
}

export type EmptyReified = Reified<Empty, EmptyFields>;

/**
 * Move struct: `Empty`
 * Module: `5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a::set`
 */
export class Empty implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::set::Empty`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Empty.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::set::Empty`;
  readonly $typeArgs: [];
  readonly $isPhantom = Empty.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: EmptyFields) {
    this.$fullTypeName = composeSuiType(
      Empty.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::set::Empty`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): EmptyReified {
    return {
      typeName: Empty.$typeName,
      fullTypeName: composeSuiType(Empty.$typeName, ...[]) as `${typeof PKG_V1}::set::Empty`,
      typeArgs: [] as [],
      isPhantom: Empty.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Empty.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Empty.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Empty.fromBcs(data),
      bcs: Empty.bcs,
      fromJSONField: (field: any) => Empty.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Empty.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => Empty.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => Empty.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Empty.fetch(client, id),
      new: (fields: EmptyFields) => {
        return new Empty([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Empty.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Empty>> {
    return phantom(Empty.reified());
  }
  static get p() {
    return Empty.phantom();
  }

  static get bcs() {
    return bcs.struct("Empty", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): Empty {
    return Empty.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Empty {
    if (!isEmpty(item.type)) {
      throw new Error("not a Empty type");
    }

    return Empty.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): Empty {
    return Empty.fromFields(Empty.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): Empty {
    return Empty.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
  }

  static fromJSON(json: Record<string, any>): Empty {
    if (json.$typeName !== Empty.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Empty.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Empty {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isEmpty(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Empty object`);
    }
    return Empty.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Empty {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isEmpty(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Empty object`);
      }

      return Empty.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Empty.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Empty> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Empty object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isEmpty(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Empty object`);
    }

    return Empty.fromSuiObjectData(res.data);
  }
}
