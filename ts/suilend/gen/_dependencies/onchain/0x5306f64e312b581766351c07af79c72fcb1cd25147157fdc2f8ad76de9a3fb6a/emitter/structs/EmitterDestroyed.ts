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
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isEmitterDestroyed(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::emitter::EmitterDestroyed`;
}

export interface EmitterDestroyedFields {
  emitterCap: ToField<ID>;
}

export type EmitterDestroyedReified = Reified<
  EmitterDestroyed,
  EmitterDestroyedFields
>;

/**
 * Move struct: `EmitterDestroyed`
 * Module: `5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a::emitter`
 */
export class EmitterDestroyed implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::emitter::EmitterDestroyed`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = EmitterDestroyed.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::emitter::EmitterDestroyed`;
  readonly $typeArgs: [];
  readonly $isPhantom = EmitterDestroyed.$isPhantom;

  readonly emitterCap: ToField<ID>;

  private constructor(typeArgs: [], fields: EmitterDestroyedFields) {
    this.$fullTypeName = composeSuiType(
      EmitterDestroyed.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::emitter::EmitterDestroyed`;
    this.$typeArgs = typeArgs;

    this.emitterCap = fields.emitterCap;
  }

  static reified(): EmitterDestroyedReified {
    return {
      typeName: EmitterDestroyed.$typeName,
      fullTypeName: composeSuiType(
        EmitterDestroyed.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::emitter::EmitterDestroyed`,
      typeArgs: [] as [],
      isPhantom: EmitterDestroyed.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        EmitterDestroyed.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        EmitterDestroyed.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => EmitterDestroyed.fromBcs(data),
      bcs: EmitterDestroyed.bcs,
      fromJSONField: (field: any) => EmitterDestroyed.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => EmitterDestroyed.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        EmitterDestroyed.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        EmitterDestroyed.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        EmitterDestroyed.fetch(client, id),
      new: (fields: EmitterDestroyedFields) => {
        return new EmitterDestroyed([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return EmitterDestroyed.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<EmitterDestroyed>> {
    return phantom(EmitterDestroyed.reified());
  }
  static get p() {
    return EmitterDestroyed.phantom();
  }

  static get bcs() {
    return bcs.struct("EmitterDestroyed", {
      emitter_cap: ID.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): EmitterDestroyed {
    return EmitterDestroyed.reified().new({
      emitterCap: decodeFromFields(ID.reified(), fields.emitter_cap),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): EmitterDestroyed {
    if (!isEmitterDestroyed(item.type)) {
      throw new Error("not a EmitterDestroyed type");
    }

    return EmitterDestroyed.reified().new({
      emitterCap: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.emitter_cap,
      ),
    });
  }

  static fromBcs(data: Uint8Array): EmitterDestroyed {
    return EmitterDestroyed.fromFields(EmitterDestroyed.bcs.parse(data));
  }

  toJSONField() {
    return {
      emitterCap: this.emitterCap,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): EmitterDestroyed {
    return EmitterDestroyed.reified().new({
      emitterCap: decodeFromJSONField(ID.reified(), field.emitterCap),
    });
  }

  static fromJSON(json: Record<string, any>): EmitterDestroyed {
    if (json.$typeName !== EmitterDestroyed.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return EmitterDestroyed.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): EmitterDestroyed {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isEmitterDestroyed(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a EmitterDestroyed object`,
      );
    }
    return EmitterDestroyed.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): EmitterDestroyed {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isEmitterDestroyed(data.bcs.type)
      ) {
        throw new Error(`object at is not a EmitterDestroyed object`);
      }

      return EmitterDestroyed.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return EmitterDestroyed.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<EmitterDestroyed> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching EmitterDestroyed object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isEmitterDestroyed(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a EmitterDestroyed object`);
    }

    return EmitterDestroyed.fromSuiObjectData(res.data);
  }
}
