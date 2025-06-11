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
import { PKG_V35 } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isVersionChangeCap(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V35}::versioned::VersionChangeCap`;
}

export interface VersionChangeCapFields {
  versionedId: ToField<ID>;
  oldVersion: ToField<"u64">;
}

export type VersionChangeCapReified = Reified<
  VersionChangeCap,
  VersionChangeCapFields
>;

/**
 * Move struct: `VersionChangeCap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::versioned`
 */
export class VersionChangeCap implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::versioned::VersionChangeCap`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = VersionChangeCap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::versioned::VersionChangeCap`;
  readonly $typeArgs: [];
  readonly $isPhantom = VersionChangeCap.$isPhantom;

  readonly versionedId: ToField<ID>;
  readonly oldVersion: ToField<"u64">;

  private constructor(typeArgs: [], fields: VersionChangeCapFields) {
    this.$fullTypeName = composeSuiType(
      VersionChangeCap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::versioned::VersionChangeCap`;
    this.$typeArgs = typeArgs;

    this.versionedId = fields.versionedId;
    this.oldVersion = fields.oldVersion;
  }

  static reified(): VersionChangeCapReified {
    return {
      typeName: VersionChangeCap.$typeName,
      fullTypeName: composeSuiType(
        VersionChangeCap.$typeName,
        ...[],
      ) as `${typeof PKG_V35}::versioned::VersionChangeCap`,
      typeArgs: [] as [],
      isPhantom: VersionChangeCap.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        VersionChangeCap.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        VersionChangeCap.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => VersionChangeCap.fromBcs(data),
      bcs: VersionChangeCap.bcs,
      fromJSONField: (field: any) => VersionChangeCap.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => VersionChangeCap.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        VersionChangeCap.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        VersionChangeCap.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        VersionChangeCap.fetch(client, id),
      new: (fields: VersionChangeCapFields) => {
        return new VersionChangeCap([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return VersionChangeCap.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<VersionChangeCap>> {
    return phantom(VersionChangeCap.reified());
  }
  static get p() {
    return VersionChangeCap.phantom();
  }

  static get bcs() {
    return bcs.struct("VersionChangeCap", {
      versioned_id: ID.bcs,
      old_version: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): VersionChangeCap {
    return VersionChangeCap.reified().new({
      versionedId: decodeFromFields(ID.reified(), fields.versioned_id),
      oldVersion: decodeFromFields("u64", fields.old_version),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): VersionChangeCap {
    if (!isVersionChangeCap(item.type)) {
      throw new Error("not a VersionChangeCap type");
    }

    return VersionChangeCap.reified().new({
      versionedId: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.versioned_id,
      ),
      oldVersion: decodeFromFieldsWithTypes("u64", item.fields.old_version),
    });
  }

  static fromBcs(data: Uint8Array): VersionChangeCap {
    return VersionChangeCap.fromFields(VersionChangeCap.bcs.parse(data));
  }

  toJSONField() {
    return {
      versionedId: this.versionedId,
      oldVersion: this.oldVersion.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): VersionChangeCap {
    return VersionChangeCap.reified().new({
      versionedId: decodeFromJSONField(ID.reified(), field.versionedId),
      oldVersion: decodeFromJSONField("u64", field.oldVersion),
    });
  }

  static fromJSON(json: Record<string, any>): VersionChangeCap {
    if (json.$typeName !== VersionChangeCap.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return VersionChangeCap.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): VersionChangeCap {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isVersionChangeCap(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a VersionChangeCap object`,
      );
    }
    return VersionChangeCap.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): VersionChangeCap {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isVersionChangeCap(data.bcs.type)
      ) {
        throw new Error(`object at is not a VersionChangeCap object`);
      }

      return VersionChangeCap.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return VersionChangeCap.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<VersionChangeCap> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching VersionChangeCap object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isVersionChangeCap(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a VersionChangeCap object`);
    }

    return VersionChangeCap.fromSuiObjectData(res.data);
  }
}
