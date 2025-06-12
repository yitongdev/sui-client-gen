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
import { PKG_V31 } from "../../constants.js";
import { UID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isVersioned(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::versioned::Versioned`;
}

export interface VersionedFields {
  id: ToField<UID>;
  version: ToField<"u64">;
}

export type VersionedReified = Reified<Versioned, VersionedFields>;

/**
 * Move struct: `Versioned`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::versioned`
 */
export class Versioned implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::versioned::Versioned`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Versioned.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::versioned::Versioned`;
  readonly $typeArgs: [];
  readonly $isPhantom = Versioned.$isPhantom;

  readonly id: ToField<UID>;
  readonly version: ToField<"u64">;

  private constructor(typeArgs: [], fields: VersionedFields) {
    this.$fullTypeName = composeSuiType(
      Versioned.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::versioned::Versioned`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.version = fields.version;
  }

  static reified(): VersionedReified {
    return {
      typeName: Versioned.$typeName,
      fullTypeName: composeSuiType(
        Versioned.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::versioned::Versioned`,
      typeArgs: [] as [],
      isPhantom: Versioned.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Versioned.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Versioned.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Versioned.fromBcs(data),
      bcs: Versioned.bcs,
      fromJSONField: (field: any) => Versioned.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Versioned.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => Versioned.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => Versioned.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Versioned.fetch(client, id),
      new: (fields: VersionedFields) => {
        return new Versioned([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Versioned.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Versioned>> {
    return phantom(Versioned.reified());
  }
  static get p() {
    return Versioned.phantom();
  }

  static get bcs() {
    return bcs.struct("Versioned", {
      id: UID.bcs,
      version: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): Versioned {
    return Versioned.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      version: decodeFromFields("u64", fields.version),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Versioned {
    if (!isVersioned(item.type)) {
      throw new Error("not a Versioned type");
    }

    return Versioned.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      version: decodeFromFieldsWithTypes("u64", item.fields.version),
    });
  }

  static fromBcs(data: Uint8Array): Versioned {
    return Versioned.fromFields(Versioned.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      version: this.version.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): Versioned {
    return Versioned.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      version: decodeFromJSONField("u64", field.version),
    });
  }

  static fromJSON(json: Record<string, any>): Versioned {
    if (json.$typeName !== Versioned.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Versioned.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Versioned {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isVersioned(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Versioned object`);
    }
    return Versioned.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Versioned {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isVersioned(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Versioned object`);
      }

      return Versioned.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Versioned.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Versioned> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Versioned object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isVersioned(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Versioned object`);
    }

    return Versioned.fromSuiObjectData(res.data);
  }
}
