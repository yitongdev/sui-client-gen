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

export function isLatestOnly(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::state::LatestOnly`;
}

export interface LatestOnlyFields {
  dummyField: ToField<"bool">;
}

export type LatestOnlyReified = Reified<LatestOnly, LatestOnlyFields>;

/**
 * Move struct: `LatestOnly`
 * Module: `8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::state`
 */
export class LatestOnly implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::state::LatestOnly`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = LatestOnly.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::state::LatestOnly`;
  readonly $typeArgs: [];
  readonly $isPhantom = LatestOnly.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: LatestOnlyFields) {
    this.$fullTypeName = composeSuiType(
      LatestOnly.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::state::LatestOnly`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): LatestOnlyReified {
    return {
      typeName: LatestOnly.$typeName,
      fullTypeName: composeSuiType(
        LatestOnly.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::state::LatestOnly`,
      typeArgs: [] as [],
      isPhantom: LatestOnly.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        LatestOnly.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        LatestOnly.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => LatestOnly.fromBcs(data),
      bcs: LatestOnly.bcs,
      fromJSONField: (field: any) => LatestOnly.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => LatestOnly.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        LatestOnly.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        LatestOnly.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        LatestOnly.fetch(client, id),
      new: (fields: LatestOnlyFields) => {
        return new LatestOnly([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return LatestOnly.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<LatestOnly>> {
    return phantom(LatestOnly.reified());
  }
  static get p() {
    return LatestOnly.phantom();
  }

  static get bcs() {
    return bcs.struct("LatestOnly", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): LatestOnly {
    return LatestOnly.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): LatestOnly {
    if (!isLatestOnly(item.type)) {
      throw new Error("not a LatestOnly type");
    }

    return LatestOnly.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): LatestOnly {
    return LatestOnly.fromFields(LatestOnly.bcs.parse(data));
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

  static fromJSONField(field: any): LatestOnly {
    return LatestOnly.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): LatestOnly {
    if (json.$typeName !== LatestOnly.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return LatestOnly.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): LatestOnly {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isLatestOnly(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a LatestOnly object`,
      );
    }
    return LatestOnly.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): LatestOnly {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isLatestOnly(data.bcs.type)) {
        throw new Error(`object at is not a LatestOnly object`);
      }

      return LatestOnly.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return LatestOnly.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<LatestOnly> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching LatestOnly object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isLatestOnly(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a LatestOnly object`);
    }

    return LatestOnly.fromSuiObjectData(res.data);
  }
}
