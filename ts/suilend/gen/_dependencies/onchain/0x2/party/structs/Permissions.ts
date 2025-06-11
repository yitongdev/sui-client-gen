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
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPermissions(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V35}::party::Permissions`;
}

export interface PermissionsFields {
  pos0: ToField<"u64">;
}

export type PermissionsReified = Reified<Permissions, PermissionsFields>;

/**
 * Move struct: `Permissions`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::party`
 */
export class Permissions implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::party::Permissions`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Permissions.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::party::Permissions`;
  readonly $typeArgs: [];
  readonly $isPhantom = Permissions.$isPhantom;

  readonly pos0: ToField<"u64">;

  private constructor(typeArgs: [], fields: PermissionsFields) {
    this.$fullTypeName = composeSuiType(
      Permissions.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::party::Permissions`;
    this.$typeArgs = typeArgs;

    this.pos0 = fields.pos0;
  }

  static reified(): PermissionsReified {
    return {
      typeName: Permissions.$typeName,
      fullTypeName: composeSuiType(
        Permissions.$typeName,
        ...[],
      ) as `${typeof PKG_V35}::party::Permissions`,
      typeArgs: [] as [],
      isPhantom: Permissions.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        Permissions.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Permissions.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Permissions.fromBcs(data),
      bcs: Permissions.bcs,
      fromJSONField: (field: any) => Permissions.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Permissions.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Permissions.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Permissions.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        Permissions.fetch(client, id),
      new: (fields: PermissionsFields) => {
        return new Permissions([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Permissions.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Permissions>> {
    return phantom(Permissions.reified());
  }
  static get p() {
    return Permissions.phantom();
  }

  static get bcs() {
    return bcs.struct("Permissions", {
      pos0: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): Permissions {
    return Permissions.reified().new({
      pos0: decodeFromFields("u64", fields.pos0),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Permissions {
    if (!isPermissions(item.type)) {
      throw new Error("not a Permissions type");
    }

    return Permissions.reified().new({
      pos0: decodeFromFieldsWithTypes("u64", item.fields.pos0),
    });
  }

  static fromBcs(data: Uint8Array): Permissions {
    return Permissions.fromFields(Permissions.bcs.parse(data));
  }

  toJSONField() {
    return {
      pos0: this.pos0.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): Permissions {
    return Permissions.reified().new({
      pos0: decodeFromJSONField("u64", field.pos0),
    });
  }

  static fromJSON(json: Record<string, any>): Permissions {
    if (json.$typeName !== Permissions.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Permissions.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Permissions {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPermissions(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Permissions object`,
      );
    }
    return Permissions.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Permissions {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isPermissions(data.bcs.type)) {
        throw new Error(`object at is not a Permissions object`);
      }

      return Permissions.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Permissions.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Permissions> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Permissions object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isPermissions(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Permissions object`);
    }

    return Permissions.fromSuiObjectData(res.data);
  }
}
