import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeArgument,
  ToTypeStr,
  TypeArgument,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  fieldToJSON,
  phantom,
  toBcs,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isEvent(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::events::Event` + "<");
}

export interface EventFields<T0 extends TypeArgument> {
  event: ToField<T0>;
}

export type EventReified<T0 extends TypeArgument> = Reified<
  Event<T0>,
  EventFields<T0>
>;

/**
 * Move struct: `Event`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::events`
 *
 * @typeParam T0 - Type parameter 0
 */
export class Event<T0 extends TypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::events::Event`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [false] as const;

  readonly $typeName = Event.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::events::Event<${ToTypeStr<T0>}>`;
  readonly $typeArgs: [ToTypeStr<T0>];
  readonly $isPhantom = Event.$isPhantom;

  readonly event: ToField<T0>;

  private constructor(typeArgs: [ToTypeStr<T0>], fields: EventFields<T0>) {
    this.$fullTypeName = composeSuiType(
      Event.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::events::Event<${ToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.event = fields.event;
  }

  static reified<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): EventReified<ToTypeArgument<T0>> {
    return {
      typeName: Event.$typeName,
      fullTypeName: composeSuiType(
        Event.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V1}::events::Event<${ToTypeStr<ToTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [ToTypeStr<ToTypeArgument<T0>>],
      isPhantom: Event.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => Event.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Event.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => Event.fromBcs(T0, data),
      bcs: Event.bcs(toBcs(T0)),
      fromJSONField: (field: any) => Event.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => Event.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Event.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Event.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        Event.fetch(client, T0, id),
      new: (fields: EventFields<ToTypeArgument<T0>>) => {
        return new Event([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Event.reified;
  }

  static phantom<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<Event<ToTypeArgument<T0>>>> {
    return phantom(Event.reified(T0));
  }
  static get p() {
    return Event.phantom;
  }

  static get bcs() {
    return <T0 extends BcsType<any>>(T0: T0) =>
      bcs.struct(`Event<${T0.name}>`, {
        event: T0,
      });
  }

  static fromFields<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): Event<ToTypeArgument<T0>> {
    return Event.reified(typeArg).new({
      event: decodeFromFields(typeArg, fields.event),
    });
  }

  static fromFieldsWithTypes<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): Event<ToTypeArgument<T0>> {
    if (!isEvent(item.type)) {
      throw new Error("not a Event type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Event.reified(typeArg).new({
      event: decodeFromFieldsWithTypes(typeArg, item.fields.event),
    });
  }

  static fromBcs<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: Uint8Array,
  ): Event<ToTypeArgument<T0>> {
    return Event.fromFields(typeArg, Event.bcs(toBcs(typeArg)).parse(data));
  }

  toJSONField() {
    return {
      event: fieldToJSON<T0>(this.$typeArgs?.[0], this.event),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    field: any,
  ): Event<ToTypeArgument<T0>> {
    return Event.reified(typeArg).new({
      event: decodeFromJSONField(typeArg, field.event),
    });
  }

  static fromJSON<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    json: Record<string, any>,
  ): Event<ToTypeArgument<T0>> {
    if (json.$typeName !== Event.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Event.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Event.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    content: SuiParsedData,
  ): Event<ToTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Event object`,
      );
    }
    return Event.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: SuiObjectData,
  ): Event<ToTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isEvent(data.bcs.type)) {
        throw new Error(`object at is not a Event object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return Event.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Event.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends Reified<TypeArgument, any>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<Event<ToTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Event object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isEvent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Event object`);
    }

    return Event.fromSuiObjectData(typeArg, res.data);
  }
}
