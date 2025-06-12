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
import { ID, UID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isKioskOwnerCap(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V35}::kiosk::KioskOwnerCap`;
}

export interface KioskOwnerCapFields {
  id: ToField<UID>;
  for: ToField<ID>;
}

export type KioskOwnerCapReified = Reified<KioskOwnerCap, KioskOwnerCapFields>;

/**
 * Move struct: `KioskOwnerCap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 */
export class KioskOwnerCap implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::kiosk::KioskOwnerCap`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = KioskOwnerCap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::kiosk::KioskOwnerCap`;
  readonly $typeArgs: [];
  readonly $isPhantom = KioskOwnerCap.$isPhantom;

  readonly id: ToField<UID>;
  readonly for: ToField<ID>;

  private constructor(typeArgs: [], fields: KioskOwnerCapFields) {
    this.$fullTypeName = composeSuiType(
      KioskOwnerCap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::kiosk::KioskOwnerCap`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.for = fields.for;
  }

  static reified(): KioskOwnerCapReified {
    return {
      typeName: KioskOwnerCap.$typeName,
      fullTypeName: composeSuiType(
        KioskOwnerCap.$typeName,
        ...[],
      ) as `${typeof PKG_V35}::kiosk::KioskOwnerCap`,
      typeArgs: [] as [],
      isPhantom: KioskOwnerCap.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => KioskOwnerCap.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => KioskOwnerCap.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => KioskOwnerCap.fromBcs(data),
      bcs: KioskOwnerCap.bcs,
      fromJSONField: (field: any) => KioskOwnerCap.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => KioskOwnerCap.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => KioskOwnerCap.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => KioskOwnerCap.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => KioskOwnerCap.fetch(client, id),
      new: (fields: KioskOwnerCapFields) => {
        return new KioskOwnerCap([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return KioskOwnerCap.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<KioskOwnerCap>> {
    return phantom(KioskOwnerCap.reified());
  }
  static get p() {
    return KioskOwnerCap.phantom();
  }

  static get bcs() {
    return bcs.struct("KioskOwnerCap", {
      id: UID.bcs,
      for: ID.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): KioskOwnerCap {
    return KioskOwnerCap.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      for: decodeFromFields(ID.reified(), fields.for),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): KioskOwnerCap {
    if (!isKioskOwnerCap(item.type)) {
      throw new Error("not a KioskOwnerCap type");
    }

    return KioskOwnerCap.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      for: decodeFromFieldsWithTypes(ID.reified(), item.fields.for),
    });
  }

  static fromBcs(data: Uint8Array): KioskOwnerCap {
    return KioskOwnerCap.fromFields(KioskOwnerCap.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      for: this.for,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): KioskOwnerCap {
    return KioskOwnerCap.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      for: decodeFromJSONField(ID.reified(), field.for),
    });
  }

  static fromJSON(json: Record<string, any>): KioskOwnerCap {
    if (json.$typeName !== KioskOwnerCap.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return KioskOwnerCap.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): KioskOwnerCap {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isKioskOwnerCap(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a KioskOwnerCap object`);
    }
    return KioskOwnerCap.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): KioskOwnerCap {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isKioskOwnerCap(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a KioskOwnerCap object`);
      }

      return KioskOwnerCap.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return KioskOwnerCap.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<KioskOwnerCap> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching KioskOwnerCap object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isKioskOwnerCap(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a KioskOwnerCap object`);
    }

    return KioskOwnerCap.fromSuiObjectData(res.data);
  }
}
