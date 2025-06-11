import { ID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
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
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { PKG_V5 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isRegistryInfo(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V5}::weight::RegistryInfo`;
}

export interface RegistryInfoFields {
  weightHookId: ToField<ID>;
}

export type RegistryInfoReified = Reified<RegistryInfo, RegistryInfoFields>;

/**
 * Move struct: `RegistryInfo`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::weight`
 */
export class RegistryInfo implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V5}::weight::RegistryInfo`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = RegistryInfo.$typeName;
  readonly $fullTypeName: `${typeof PKG_V5}::weight::RegistryInfo`;
  readonly $typeArgs: [];
  readonly $isPhantom = RegistryInfo.$isPhantom;

  readonly weightHookId: ToField<ID>;

  private constructor(typeArgs: [], fields: RegistryInfoFields) {
    this.$fullTypeName = composeSuiType(
      RegistryInfo.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V5}::weight::RegistryInfo`;
    this.$typeArgs = typeArgs;

    this.weightHookId = fields.weightHookId;
  }

  static reified(): RegistryInfoReified {
    return {
      typeName: RegistryInfo.$typeName,
      fullTypeName: composeSuiType(
        RegistryInfo.$typeName,
        ...[],
      ) as `${typeof PKG_V5}::weight::RegistryInfo`,
      typeArgs: [] as [],
      isPhantom: RegistryInfo.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        RegistryInfo.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        RegistryInfo.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => RegistryInfo.fromBcs(data),
      bcs: RegistryInfo.bcs,
      fromJSONField: (field: any) => RegistryInfo.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => RegistryInfo.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        RegistryInfo.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        RegistryInfo.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        RegistryInfo.fetch(client, id),
      new: (fields: RegistryInfoFields) => {
        return new RegistryInfo([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return RegistryInfo.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<RegistryInfo>> {
    return phantom(RegistryInfo.reified());
  }
  static get p() {
    return RegistryInfo.phantom();
  }

  static get bcs() {
    return bcs.struct("RegistryInfo", {
      weight_hook_id: ID.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): RegistryInfo {
    return RegistryInfo.reified().new({
      weightHookId: decodeFromFields(ID.reified(), fields.weight_hook_id),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): RegistryInfo {
    if (!isRegistryInfo(item.type)) {
      throw new Error("not a RegistryInfo type");
    }

    return RegistryInfo.reified().new({
      weightHookId: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.weight_hook_id,
      ),
    });
  }

  static fromBcs(data: Uint8Array): RegistryInfo {
    return RegistryInfo.fromFields(RegistryInfo.bcs.parse(data));
  }

  toJSONField() {
    return {
      weightHookId: this.weightHookId,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): RegistryInfo {
    return RegistryInfo.reified().new({
      weightHookId: decodeFromJSONField(ID.reified(), field.weightHookId),
    });
  }

  static fromJSON(json: Record<string, any>): RegistryInfo {
    if (json.$typeName !== RegistryInfo.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return RegistryInfo.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): RegistryInfo {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isRegistryInfo(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a RegistryInfo object`,
      );
    }
    return RegistryInfo.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): RegistryInfo {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isRegistryInfo(data.bcs.type)
      ) {
        throw new Error(`object at is not a RegistryInfo object`);
      }

      return RegistryInfo.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return RegistryInfo.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<RegistryInfo> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching RegistryInfo object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isRegistryInfo(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a RegistryInfo object`);
    }

    return RegistryInfo.fromSuiObjectData(res.data);
  }
}
