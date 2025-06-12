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
import { ID } from "../../../0x2/object/structs/index.js";
import { Bytes32 } from "../../bytes32/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPackageInfo(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::package_utils::PackageInfo`;
}

export interface PackageInfoFields {
  package: ToField<ID>;
  digest: ToField<Bytes32>;
}

export type PackageInfoReified = Reified<PackageInfo, PackageInfoFields>;

/**
 * Move struct: `PackageInfo`
 * Module: `5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a::package_utils`
 */
export class PackageInfo implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::package_utils::PackageInfo`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = PackageInfo.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::package_utils::PackageInfo`;
  readonly $typeArgs: [];
  readonly $isPhantom = PackageInfo.$isPhantom;

  readonly package: ToField<ID>;
  readonly digest: ToField<Bytes32>;

  private constructor(typeArgs: [], fields: PackageInfoFields) {
    this.$fullTypeName = composeSuiType(
      PackageInfo.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::package_utils::PackageInfo`;
    this.$typeArgs = typeArgs;

    this.package = fields.package;
    this.digest = fields.digest;
  }

  static reified(): PackageInfoReified {
    return {
      typeName: PackageInfo.$typeName,
      fullTypeName: composeSuiType(
        PackageInfo.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::package_utils::PackageInfo`,
      typeArgs: [] as [],
      isPhantom: PackageInfo.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => PackageInfo.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => PackageInfo.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PackageInfo.fromBcs(data),
      bcs: PackageInfo.bcs,
      fromJSONField: (field: any) => PackageInfo.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => PackageInfo.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => PackageInfo.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => PackageInfo.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => PackageInfo.fetch(client, id),
      new: (fields: PackageInfoFields) => {
        return new PackageInfo([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PackageInfo.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<PackageInfo>> {
    return phantom(PackageInfo.reified());
  }
  static get p() {
    return PackageInfo.phantom();
  }

  static get bcs() {
    return bcs.struct("PackageInfo", {
      package: ID.bcs,
      digest: Bytes32.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): PackageInfo {
    return PackageInfo.reified().new({
      package: decodeFromFields(ID.reified(), fields.package),
      digest: decodeFromFields(Bytes32.reified(), fields.digest),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PackageInfo {
    if (!isPackageInfo(item.type)) {
      throw new Error("not a PackageInfo type");
    }

    return PackageInfo.reified().new({
      package: decodeFromFieldsWithTypes(ID.reified(), item.fields.package),
      digest: decodeFromFieldsWithTypes(Bytes32.reified(), item.fields.digest),
    });
  }

  static fromBcs(data: Uint8Array): PackageInfo {
    return PackageInfo.fromFields(PackageInfo.bcs.parse(data));
  }

  toJSONField() {
    return {
      package: this.package,
      digest: this.digest.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): PackageInfo {
    return PackageInfo.reified().new({
      package: decodeFromJSONField(ID.reified(), field.package),
      digest: decodeFromJSONField(Bytes32.reified(), field.digest),
    });
  }

  static fromJSON(json: Record<string, any>): PackageInfo {
    if (json.$typeName !== PackageInfo.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return PackageInfo.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): PackageInfo {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPackageInfo(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a PackageInfo object`);
    }
    return PackageInfo.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): PackageInfo {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isPackageInfo(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a PackageInfo object`);
      }

      return PackageInfo.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PackageInfo.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<PackageInfo> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching PackageInfo object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isPackageInfo(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a PackageInfo object`);
    }

    return PackageInfo.fromSuiObjectData(res.data);
  }
}
