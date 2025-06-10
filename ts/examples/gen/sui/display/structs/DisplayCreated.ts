import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V31 } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isDisplayCreated(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::display::DisplayCreated` + "<");
}

export interface DisplayCreatedFields<T extends PhantomTypeArgument> {
  id: ToField<ID>;
}

export type DisplayCreatedReified<T extends PhantomTypeArgument> = Reified<
  DisplayCreated<T>,
  DisplayCreatedFields<T>
>;

/**
 * Move struct: `DisplayCreated`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::display`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class DisplayCreated<T extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::display::DisplayCreated`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = DisplayCreated.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::display::DisplayCreated<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = DisplayCreated.$isPhantom;

  readonly id: ToField<ID>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: DisplayCreatedFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      DisplayCreated.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::display::DisplayCreated<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): DisplayCreatedReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: DisplayCreated.$typeName,
      fullTypeName: composeSuiType(
        DisplayCreated.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::display::DisplayCreated<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: DisplayCreated.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        DisplayCreated.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        DisplayCreated.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => DisplayCreated.fromBcs(T, data),
      bcs: DisplayCreated.bcs,
      fromJSONField: (field: any) => DisplayCreated.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => DisplayCreated.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        DisplayCreated.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        DisplayCreated.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        DisplayCreated.fetch(client, T, id),
      new: (fields: DisplayCreatedFields<ToPhantomTypeArgument<T>>) => {
        return new DisplayCreated([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return DisplayCreated.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<DisplayCreated<ToPhantomTypeArgument<T>>>> {
    return phantom(DisplayCreated.reified(T));
  }
  static get p() {
    return DisplayCreated.phantom;
  }

  static get bcs() {
    return bcs.struct("DisplayCreated", {
      id: ID.bcs,
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): DisplayCreated<ToPhantomTypeArgument<T>> {
    return DisplayCreated.reified(typeArg).new({
      id: decodeFromFields(ID.reified(), fields.id),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): DisplayCreated<ToPhantomTypeArgument<T>> {
    if (!isDisplayCreated(item.type)) {
      throw new Error("not a DisplayCreated type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return DisplayCreated.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): DisplayCreated<ToPhantomTypeArgument<T>> {
    return DisplayCreated.fromFields(typeArg, DisplayCreated.bcs.parse(data));
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

  static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    field: any,
  ): DisplayCreated<ToPhantomTypeArgument<T>> {
    return DisplayCreated.reified(typeArg).new({
      id: decodeFromJSONField(ID.reified(), field.id),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): DisplayCreated<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== DisplayCreated.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(DisplayCreated.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return DisplayCreated.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): DisplayCreated<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isDisplayCreated(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a DisplayCreated object`,
      );
    }
    return DisplayCreated.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): DisplayCreated<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isDisplayCreated(data.bcs.type)
      ) {
        throw new Error(`object at is not a DisplayCreated object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = compressSuiType(gotTypeArgs[0]);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (gotTypeArg !== compressSuiType(extractType(typeArg))) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`,
        );
      }

      return DisplayCreated.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return DisplayCreated.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<DisplayCreated<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching DisplayCreated object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isDisplayCreated(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a DisplayCreated object`);
    }

    return DisplayCreated.fromSuiObjectData(typeArg, res.data);
  }
}
