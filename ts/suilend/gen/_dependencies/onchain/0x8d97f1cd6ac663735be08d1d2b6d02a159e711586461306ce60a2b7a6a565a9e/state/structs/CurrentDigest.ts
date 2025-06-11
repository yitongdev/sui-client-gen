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

export function isCurrentDigest(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::state::CurrentDigest`;
}

export interface CurrentDigestFields {
  dummyField: ToField<"bool">;
}

export type CurrentDigestReified = Reified<CurrentDigest, CurrentDigestFields>;

/**
 * Move struct: `CurrentDigest`
 * Module: `8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::state`
 */
export class CurrentDigest implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::state::CurrentDigest`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = CurrentDigest.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::state::CurrentDigest`;
  readonly $typeArgs: [];
  readonly $isPhantom = CurrentDigest.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: CurrentDigestFields) {
    this.$fullTypeName = composeSuiType(
      CurrentDigest.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::state::CurrentDigest`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): CurrentDigestReified {
    return {
      typeName: CurrentDigest.$typeName,
      fullTypeName: composeSuiType(
        CurrentDigest.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::state::CurrentDigest`,
      typeArgs: [] as [],
      isPhantom: CurrentDigest.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        CurrentDigest.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        CurrentDigest.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => CurrentDigest.fromBcs(data),
      bcs: CurrentDigest.bcs,
      fromJSONField: (field: any) => CurrentDigest.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => CurrentDigest.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        CurrentDigest.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        CurrentDigest.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        CurrentDigest.fetch(client, id),
      new: (fields: CurrentDigestFields) => {
        return new CurrentDigest([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return CurrentDigest.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<CurrentDigest>> {
    return phantom(CurrentDigest.reified());
  }
  static get p() {
    return CurrentDigest.phantom();
  }

  static get bcs() {
    return bcs.struct("CurrentDigest", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): CurrentDigest {
    return CurrentDigest.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): CurrentDigest {
    if (!isCurrentDigest(item.type)) {
      throw new Error("not a CurrentDigest type");
    }

    return CurrentDigest.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): CurrentDigest {
    return CurrentDigest.fromFields(CurrentDigest.bcs.parse(data));
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

  static fromJSONField(field: any): CurrentDigest {
    return CurrentDigest.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): CurrentDigest {
    if (json.$typeName !== CurrentDigest.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return CurrentDigest.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): CurrentDigest {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isCurrentDigest(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a CurrentDigest object`,
      );
    }
    return CurrentDigest.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): CurrentDigest {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isCurrentDigest(data.bcs.type)
      ) {
        throw new Error(`object at is not a CurrentDigest object`);
      }

      return CurrentDigest.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return CurrentDigest.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<CurrentDigest> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching CurrentDigest object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isCurrentDigest(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a CurrentDigest object`);
    }

    return CurrentDigest.fromSuiObjectData(res.data);
  }
}
