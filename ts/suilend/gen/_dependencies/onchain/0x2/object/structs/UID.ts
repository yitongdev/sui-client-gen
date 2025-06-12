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
import { ID as ID1 } from "./ID.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isUID(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V35}::object::UID`;
}

export interface UIDFields {
  id: ToField<ID1>;
}

export type UIDReified = Reified<UID, UIDFields>;

/**
 * Move struct: `UID`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 */
export class UID implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::object::UID`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = UID.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::object::UID`;
  readonly $typeArgs: [];
  readonly $isPhantom = UID.$isPhantom;

  readonly id: ToField<ID1>;

  private constructor(typeArgs: [], fields: UIDFields) {
    this.$fullTypeName = composeSuiType(
      UID.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::object::UID`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
  }

  static reified(): UIDReified {
    return {
      typeName: UID.$typeName,
      fullTypeName: composeSuiType(UID.$typeName, ...[]) as `${typeof PKG_V35}::object::UID`,
      typeArgs: [] as [],
      isPhantom: UID.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => UID.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => UID.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => UID.fromBcs(data),
      bcs: UID.bcs,
      fromJSONField: (field: any) => UID.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => UID.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => UID.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => UID.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => UID.fetch(client, id),
      new: (fields: UIDFields) => {
        return new UID([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return UID.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<UID>> {
    return phantom(UID.reified());
  }
  static get p() {
    return UID.phantom();
  }

  static get bcs() {
    return bcs.struct("UID", {
      id: ID1.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): UID {
    return UID.reified().new({ id: decodeFromFields(ID1.reified(), fields.id) });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): UID {
    if (!isUID(item.type)) {
      throw new Error("not a UID type");
    }

    return UID.reified().new({ id: decodeFromFieldsWithTypes(ID1.reified(), item.fields.id) });
  }

  static fromBcs(data: Uint8Array): UID {
    return UID.fromFields(UID.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): UID {
    return UID.reified().new({ id: decodeFromJSONField(ID1.reified(), field.id) });
  }

  static fromJSON(json: Record<string, any>): UID {
    if (json.$typeName !== UID.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return UID.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): UID {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isUID(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a UID object`);
    }
    return UID.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): UID {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isUID(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a UID object`);
      }

      return UID.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return UID.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<UID> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching UID object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isUID(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a UID object`);
    }

    return UID.fromSuiObjectData(res.data);
  }
}
