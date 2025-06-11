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
import { UID } from "../../../0x2/object/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isEmitterCap(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::emitter::EmitterCap`;
}

export interface EmitterCapFields {
  id: ToField<UID>;
  sequence: ToField<"u64">;
}

export type EmitterCapReified = Reified<EmitterCap, EmitterCapFields>;

/**
 * Move struct: `EmitterCap`
 * Module: `5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a::emitter`
 */
export class EmitterCap implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::emitter::EmitterCap`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = EmitterCap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::emitter::EmitterCap`;
  readonly $typeArgs: [];
  readonly $isPhantom = EmitterCap.$isPhantom;

  readonly id: ToField<UID>;
  readonly sequence: ToField<"u64">;

  private constructor(typeArgs: [], fields: EmitterCapFields) {
    this.$fullTypeName = composeSuiType(
      EmitterCap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::emitter::EmitterCap`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.sequence = fields.sequence;
  }

  static reified(): EmitterCapReified {
    return {
      typeName: EmitterCap.$typeName,
      fullTypeName: composeSuiType(
        EmitterCap.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::emitter::EmitterCap`,
      typeArgs: [] as [],
      isPhantom: EmitterCap.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        EmitterCap.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        EmitterCap.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => EmitterCap.fromBcs(data),
      bcs: EmitterCap.bcs,
      fromJSONField: (field: any) => EmitterCap.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => EmitterCap.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        EmitterCap.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        EmitterCap.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        EmitterCap.fetch(client, id),
      new: (fields: EmitterCapFields) => {
        return new EmitterCap([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return EmitterCap.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<EmitterCap>> {
    return phantom(EmitterCap.reified());
  }
  static get p() {
    return EmitterCap.phantom();
  }

  static get bcs() {
    return bcs.struct("EmitterCap", {
      id: UID.bcs,
      sequence: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): EmitterCap {
    return EmitterCap.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      sequence: decodeFromFields("u64", fields.sequence),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): EmitterCap {
    if (!isEmitterCap(item.type)) {
      throw new Error("not a EmitterCap type");
    }

    return EmitterCap.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      sequence: decodeFromFieldsWithTypes("u64", item.fields.sequence),
    });
  }

  static fromBcs(data: Uint8Array): EmitterCap {
    return EmitterCap.fromFields(EmitterCap.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      sequence: this.sequence.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): EmitterCap {
    return EmitterCap.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      sequence: decodeFromJSONField("u64", field.sequence),
    });
  }

  static fromJSON(json: Record<string, any>): EmitterCap {
    if (json.$typeName !== EmitterCap.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return EmitterCap.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): EmitterCap {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isEmitterCap(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a EmitterCap object`,
      );
    }
    return EmitterCap.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): EmitterCap {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isEmitterCap(data.bcs.type)) {
        throw new Error(`object at is not a EmitterCap object`);
      }

      return EmitterCap.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return EmitterCap.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<EmitterCap> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching EmitterCap object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isEmitterCap(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a EmitterCap object`);
    }

    return EmitterCap.fromSuiObjectData(res.data);
  }
}
