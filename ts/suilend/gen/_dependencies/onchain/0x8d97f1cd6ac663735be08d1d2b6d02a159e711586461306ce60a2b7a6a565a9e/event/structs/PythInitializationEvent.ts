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
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPythInitializationEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::event::PythInitializationEvent`;
}

export interface PythInitializationEventFields {
  dummyField: ToField<"bool">;
}

export type PythInitializationEventReified = Reified<
  PythInitializationEvent,
  PythInitializationEventFields
>;

/**
 * Move struct: `PythInitializationEvent`
 * Module: `8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::event`
 */
export class PythInitializationEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::event::PythInitializationEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = PythInitializationEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::event::PythInitializationEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = PythInitializationEvent.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: PythInitializationEventFields) {
    this.$fullTypeName = composeSuiType(
      PythInitializationEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::event::PythInitializationEvent`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): PythInitializationEventReified {
    return {
      typeName: PythInitializationEvent.$typeName,
      fullTypeName: composeSuiType(
        PythInitializationEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::event::PythInitializationEvent`,
      typeArgs: [] as [],
      isPhantom: PythInitializationEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => PythInitializationEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        PythInitializationEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PythInitializationEvent.fromBcs(data),
      bcs: PythInitializationEvent.bcs,
      fromJSONField: (field: any) => PythInitializationEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => PythInitializationEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        PythInitializationEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        PythInitializationEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => PythInitializationEvent.fetch(client, id),
      new: (fields: PythInitializationEventFields) => {
        return new PythInitializationEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PythInitializationEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<PythInitializationEvent>> {
    return phantom(PythInitializationEvent.reified());
  }
  static get p() {
    return PythInitializationEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("PythInitializationEvent", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): PythInitializationEvent {
    return PythInitializationEvent.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PythInitializationEvent {
    if (!isPythInitializationEvent(item.type)) {
      throw new Error("not a PythInitializationEvent type");
    }

    return PythInitializationEvent.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): PythInitializationEvent {
    return PythInitializationEvent.fromFields(PythInitializationEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): PythInitializationEvent {
    return PythInitializationEvent.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): PythInitializationEvent {
    if (json.$typeName !== PythInitializationEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return PythInitializationEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): PythInitializationEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPythInitializationEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a PythInitializationEvent object`,
      );
    }
    return PythInitializationEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): PythInitializationEvent {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isPythInitializationEvent(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a PythInitializationEvent object`);
      }

      return PythInitializationEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PythInitializationEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<PythInitializationEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching PythInitializationEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isPythInitializationEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a PythInitializationEvent object`);
    }

    return PythInitializationEvent.fromSuiObjectData(res.data);
  }
}
