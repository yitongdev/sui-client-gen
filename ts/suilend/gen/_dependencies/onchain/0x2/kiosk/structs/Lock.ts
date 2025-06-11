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

export function isLock(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V35}::kiosk::Lock`;
}

export interface LockFields {
  id: ToField<ID>;
}

export type LockReified = Reified<Lock, LockFields>;

/**
 * Move struct: `Lock`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 */
export class Lock implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::kiosk::Lock`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Lock.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::kiosk::Lock`;
  readonly $typeArgs: [];
  readonly $isPhantom = Lock.$isPhantom;

  readonly id: ToField<ID>;

  private constructor(typeArgs: [], fields: LockFields) {
    this.$fullTypeName = composeSuiType(
      Lock.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::kiosk::Lock`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
  }

  static reified(): LockReified {
    return {
      typeName: Lock.$typeName,
      fullTypeName: composeSuiType(
        Lock.$typeName,
        ...[],
      ) as `${typeof PKG_V35}::kiosk::Lock`,
      typeArgs: [] as [],
      isPhantom: Lock.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Lock.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Lock.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Lock.fromBcs(data),
      bcs: Lock.bcs,
      fromJSONField: (field: any) => Lock.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Lock.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Lock.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Lock.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Lock.fetch(client, id),
      new: (fields: LockFields) => {
        return new Lock([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Lock.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Lock>> {
    return phantom(Lock.reified());
  }
  static get p() {
    return Lock.phantom();
  }

  static get bcs() {
    return bcs.struct("Lock", {
      id: ID.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): Lock {
    return Lock.reified().new({
      id: decodeFromFields(ID.reified(), fields.id),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Lock {
    if (!isLock(item.type)) {
      throw new Error("not a Lock type");
    }

    return Lock.reified().new({
      id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
    });
  }

  static fromBcs(data: Uint8Array): Lock {
    return Lock.fromFields(Lock.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): Lock {
    return Lock.reified().new({
      id: decodeFromJSONField(ID.reified(), field.id),
    });
  }

  static fromJSON(json: Record<string, any>): Lock {
    if (json.$typeName !== Lock.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Lock.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Lock {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isLock(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Lock object`,
      );
    }
    return Lock.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Lock {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isLock(data.bcs.type)) {
        throw new Error(`object at is not a Lock object`);
      }

      return Lock.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Lock.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Lock> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Lock object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isLock(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Lock object`);
    }

    return Lock.fromSuiObjectData(res.data);
  }
}
